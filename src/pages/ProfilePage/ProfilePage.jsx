import React, {useState} from 'react';
import cls from "./ProfilePage.module.scss"
import {Avatar, Col, Menu, Row, Typography} from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import MainInfo from "./InfoComponents/MainInfo/MainInfo";
import DocsInfo from "./InfoComponents/DocsInfo/DocsInfo";
import RequiestInfo from "./InfoComponents/RequestInfo/RequiestInfo";
import UniversityRequest from "./InfoComponents/UniversityRequest/UniversityRequest";

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
        element: <UniversityRequest/>
    },

]


const items = [
    getItem('Информация', 'sub1', <MailOutlined/>, [
        getItem('Основные данные', '1'),
        getItem('Личные документы', '2'),
    ]),
    getItem('Обратная связь от университетов', '3'),
    getItem('Обраная связь от банков', '4'),

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