import React, {useState} from 'react';
import {Avatar, Button, Drawer, Input} from "antd";
import './styles.css'

const Chat = ({component_img, setOpen, title, open}) => {



    const onClose = () => {
        setOpen(false);
    };

    return (
            <Drawer title="Чат" placement="right" onClose={onClose} open={open} bodyStyle={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}} className="drawerChat">
                <div className='title'>
                    {component_img}
                </div>
                <span>Нет сообщений</span>
                <div className='message'>
                    <Input defaultValue="Напишите что-нибудь"/>
                    <Button type="primary">Отправить</Button>
                </div>
            </Drawer>

    );
};

export default Chat;