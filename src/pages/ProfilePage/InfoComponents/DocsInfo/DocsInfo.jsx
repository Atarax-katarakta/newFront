import React, {useState} from 'react';
import cls from "./DocsInfo.module.scss"
import {Button, Card, Typography} from "antd";
import {Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import {EyeInvisibleTwoTone, EyeTwoTone} from "@ant-design/icons";

const DocsInfo = () => {
    const [passportList, setPassportList] = useState([
        {
            uid: '-1',
            name: 'passport.png',
            status: 'done',
            url: 'https://v1.spb.ru/gallery/foto-na-dokumenty/usefulinfo/photo2.jpg',
        },
    ]);
    const [certificateList, setСertificateList] = useState([
        {
            uid: '-1',
            name: 'certificate.png',
            status: 'done',
            url: 'https://litvl.ru/assets/components/phpthumbof/cache/2021-2-attestat-srednee-obshhee-obraz-oborot-c-otl.dee6c2c981dcfe394bdd1616c58c2edc142.jpg',
        },
    ]);
    const [moreList, setMoreList] = useState([
        {
            uid: '-1',
            name: 'personalData.png',
            status: 'done',
            url: "https://www.hr-director.ru/images/articles/67213/82.jpg"
        },
        {
            uid: '0',
            name: 'certificate.png',
            status: 'done',
            url: "https://online-olympiad.ru/img/certs/Math-cert.jpg"
        },
    ]);

    const [visibleData, setVisibleData] = useState({
        passport: false,
        snils: false,
        inn: false
    })

    const handleVisible = (type) => {
        switch (type) {
            case "passport":
                setVisibleData({...visibleData, passport: !visibleData.passport})
                break;
            case "inn":
                setVisibleData({...visibleData, inn: !visibleData.inn})
                break;
            case "snils":
                setVisibleData({...visibleData, snils: !visibleData.snils})
                break;
        }
    }
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
    const info = [
        {
            name: "Паспорт РФ",
            value:
            (
                <div className={cls.info}>
                    {visibleData.passport ? "1241 124323" : "*************"}
                    {visibleData.passport ? <EyeTwoTone onClick={() => handleVisible("passport")}/> : <EyeInvisibleTwoTone onClick={() => handleVisible("passport")}/>}
                </div>
            )
        },
        {
            name: "СНИЛС",
            value:
            (
                <div className={cls.info}>
                    {visibleData.snils ? "124-125-533 78" : "*************"}
                    {visibleData.snils ? <EyeTwoTone onClick={() => handleVisible("snils")}/> : <EyeInvisibleTwoTone onClick={() => handleVisible("snils")}/>}
                </div>
            )

        },
        {
            name: "ИНН",
            value: (
                <div className={cls.info}>
                    {visibleData.inn ? 1753335538982 : "*************"}
                    {visibleData.inn ? <EyeTwoTone onClick={() => handleVisible("inn")}/> : <EyeInvisibleTwoTone onClick={() => handleVisible("inn")}/>}
                </div>
            )
        },
        {
            name: "Скан паспорта",
            value: (
                <ImgCrop rotationSlider>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={passportList}
                        onChange={({fileList: newFileList}) => {
                            setPassportList(newFileList)
                        }}
                        onPreview={onPreview}
                        disabled
                    >
                        {passportList.length < 5 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            )
        },
        {
            name: "Скан аттестата",
            value: (
                <ImgCrop rotationSlider>
                    <Upload
                        action="https://litvl.ru/assets/components/phpthumbof/cache/2021-2-attestat-srednee-obshhee-obraz-oborot-c-otl.dee6c2c981dcfe394bdd1616c58c2edc142.jpg"
                        listType="picture-card"
                        fileList={certificateList}
                        onChange={({fileList: newFileList}) => {
                            setСertificateList(newFileList)
                        }}
                        onPreview={onPreview}
                        disabled
                    >
                        {certificateList.length < 5 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            )
        },
        {
            name: "Дополнительные документы",
            value: (
                <ImgCrop rotationSlider>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={moreList}
                        onChange={({fileList: newFileList}) => {
                            setMoreList(newFileList)
                        }}
                        onPreview={onPreview}
                        disabled
                    >
                        {moreList.length < 5 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            )
        },
    ]
    return (
        <div className={cls.Docs}>
            {info.map((item, i) => (
                <Card title={item.name} key={item.name}>
                    <Typography.Text>
                        {item.value}
                    </Typography.Text>
                </Card>
            ))}
        </div>
    );
};

export default DocsInfo;