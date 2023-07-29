import React, {useState} from 'react';
import {DatePicker, message, Form, Input, InputNumber, Upload, Button} from "antd";
import {AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {UploadOutlined} from "@ant-design/icons";

const {Item} = Form
const UploadFiles = () => {

    const [value, setValue] = useState();
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const handleUpload = () => {
        messageApi.success('Документы отправлены');
        // const formData = new FormData();
        // fileList.forEach((file) => {
        //     formData.append('files[]', file);
        // });
        // setUploading(true);
        // // You can use any AJAX library you like
        // fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then(() => {
        //         setFileList([]);
        //         message.success('upload successfully.');
        //     })
        //     .catch(() => {
        //         message.error('upload failed.');
        //     })
        //     .finally(() => {
        //         setUploading(false);
        //     });
    };
    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            className="form"
            name="basic"
            style={{maxWidth: 400, margin: "100px auto", display: "flex", flexDirection: "column", alignItems: "start"}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {contextHolder}
            <Item
                style={{display: "flex", justifyContent: "space-between"}}

                label="Серия и номер паспорта"
                name="passport"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Item>
            <Item
                style={{display: "flex", justifyContent: "space-between"}}

                label="Дата выдачи"
                name="date"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <DatePicker/>
            </Item>
            <Item
                style={{display: "flex", justifyContent: "space-between"}}

                label="Кем выдан"
                name="issuedBy"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Item>
            <Item
                style={{display: "flex", justifyContent: "space-between"}}
                label="Номер подразделения"
                name="subdivision"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <InputNumber/>
            </Item>
            <Item
                style={{display: "flex", justifyContent: "space-between"}}
                label="Адрес регистрации"
                name="adress"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <AddressSuggestions token="bebc2448d3ef84950aba6a38c99f5c558dd429be" value={value} onChange={setValue}/>
            </Item>
            <Item
                style={{display: "flex", justifyContent: "space-between"}}
                label="Сканы паспорта">
                <Upload {...props}>
                    <Button icon={<UploadOutlined/>}>+</Button>
                </Upload>
            </Item>
            <Item>
                <Button
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{
                        marginTop: 16,
                    }}
                >
                    Отправить
                </Button>
            </Item>
        </Form>
    );
};

export default UploadFiles;