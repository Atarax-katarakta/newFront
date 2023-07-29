import React, {useState} from 'react';
import cls from "./ProfilePage.module.scss"
import {Avatar, Col, Menu, Row, Typography} from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import MainInfo from "./InfoComponents/MainInfo/MainInfo";
import DocsInfo from "./InfoComponents/DocsInfo/DocsInfo";
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
    }
]


const items = [
    getItem('Информация', 'sub1', <MailOutlined/>, [
        getItem('Основные данные', '1'),
        getItem('Личные документы', '2'),
    ]),
    getItem('Ответы от университетов', 'sub2', <AppstoreOutlined/>, [
        getItem('Приглашения', '3'),
        getItem('Отказы', '4'),
    ]),
    getItem('Ответы от банков', 'sub4', <SettingOutlined/>, [
        getItem('Одобрения', '5'),
        getItem('Отказы', '6'),
    ]),
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
                    style={{minHeight: "82vh"}}
                    span={5}
                    className={cls.menu}>
                    <div className={cls.label}>
                        <Avatar size={64} icon={<UserOutlined/>}/>
                        <Typography.Text>
                            Григорьев Иван Денисович
                        </Typography.Text>
                    </div>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
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