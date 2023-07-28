import React from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

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
const ProfileMenu = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
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
    );
};
export default ProfileMenu;