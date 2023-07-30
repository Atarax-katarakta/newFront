import React, {useState} from 'react';
import {Button, DatePicker, Input, Radio, Select, Upload} from 'antd';
import cl from './creditForm.module.css'
import ImgCrop from "antd-img-crop";
import {Link} from "react-router-dom";

const CreditForm = () => {
    const [value, setValue] = useState(1);
    const [value1, setValue1] = useState(1);
    const [passportList, setPassportList] = useState([]);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChange1 = (e) => {
        setValue(e.target.value);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const onChange2 = (e) => {
        setValue1(e.target.value)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={cl.credit_form}>
            <div className={cl.title}>Роль в предполагаемой сделке</div>
            <Radio.Group onChange={onChange1} value={value}>
                <Radio value={1}>Я заемщик</Radio>
                <Radio value={2}>Я созаемщик</Radio>
                <Radio value={3}>Я поручитель</Radio>
            </Radio.Group>
            <span style={{margin: '0.5rem 0'}}>Я законный предстваитель Заемщика</span>
            <Radio.Group onChange={onChange2} value={value1}>
                <Radio value={1}>Родитель</Radio>
                <Radio value={2}>Усыновительь</Radio>
            </Radio.Group>
            <span>Если вы явлетесь Созаемщиком/Поручителем/Законным представителем заемщика, укажите Ф.И.О. Заемщика/Основного созаемщика</span>
            <Input placeholder="Фамилия"/>
            <Input placeholder="Имя"/>
            <Input placeholder="Отчество"/>
            <div className={cl.title}>Персональные данные</div>
            <Input placeholder="Фамилия"/>
            <Input placeholder="Имя"/>
            <Input placeholder="Отчество"/>
            <span>Дата рождения</span>
            <DatePicker onChange={onChange}/>
            <Input placeholder="Место рождения (заполните в соответствии с паспортом)"/>
            <Input placeholder="ИНН"/>
            <Select
                placeholder={"Пол"}
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'Ж',
                        label: 'Ж',
                    },
                    {
                        value: 'М',
                        label: 'М',
                    },

                ]}
            />
            <ImgCrop rotationSlider>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={passportList}
                    onChange={({fileList: newFileList}) => {
                        setPassportList(newFileList)
                    }}
                    onPreview={onPreview}

                >
                    {passportList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop>
            <Button type='default'>
                <Link to={"/credit_calculate"}>Перейти в калькулятор</Link>
            </Button>
        </div>
    );
};

export default CreditForm;