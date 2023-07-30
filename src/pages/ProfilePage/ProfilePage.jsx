import React, {useState} from 'react';
import cls from "./ProfilePage.module.scss"
import {Avatar, Col, Menu, Row, Typography} from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import MainInfo from "./InfoComponents/MainInfo/MainInfo";
import DocsInfo from "./InfoComponents/DocsInfo/DocsInfo";
import RequiestInfo from "./InfoComponents/RequestInfo/RequiestInfo";
import UniversityRequest from "./InfoComponents/UniversityRequest/UniversityRequest";
import Portfolio from "./Portfolio/Portfolio";
import BankRequest from "./InfoComponents/BankRequest/BankRequest";

export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const internalPages = [
    {
        key: 1,
        element: <MainInfo/>
    },
    {
        key: 2,
        element: <DocsInfo/>
    },
    {
        key: 3,
        element: <UniversityRequest/>
    },
    {
        key: 4,
        element: <BankRequest/>
    },
    {
        key: 5,
        element: <Portfolio/>
    },

]


const items = [
    getItem('Информация', 'sub1', <MailOutlined/>, [
        getItem('Основные данные', '1'),
        getItem('Личные документы', '2'),
    ]),
    getItem('Обратная связь от университетов', '3'),
    getItem('Обраная связь от банков', '4'),
    getItem('Портфолио', '5'),

];
const ProfilePage = () => {
    const [selectedMenu, setSelectedMenu] = useState(1)
    const onClick = (e) => {
        setSelectedMenu(e.key)
    };
    return (
        <div className={cls.Profile}>
            <Row style={{minHeight: "82vh"}}>
                <Col
                    style={{minHeight: "82vh", backgroundColor: 'var(--secondary)'}}
                    span={5}
                    className={cls.menu}>
                    <div className={cls.label}>
                        <Avatar size={64} icon={<UserOutlined/>}/>
                        <Typography.Text style={{color: 'var(--gray)', fontFamily: 'Montserrat'}}>
                            Григорьев Иван Денисович
                        </Typography.Text>
                    </div>
                    <Menu
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        style={{backgroundColor: 'var(--secondary)'}}
                    />
                </Col>
                <Col
                    offset={1}
                    span={18}
                    className={cls.info}
                >
                    {internalPages[selectedMenu - 1].element}
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;