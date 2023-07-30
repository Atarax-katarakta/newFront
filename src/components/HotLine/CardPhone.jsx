import React from 'react';
import {Button} from "antd";
import {useState} from "react";
import Chat from "../Chat/Chat";

const CardPhone = ({obj}) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    return (
        <div className='card_phone'>
            <img className='logo' src={obj} alt=''/>
            <Button type='primary' onClick={showDrawer}>Задать вопрос</Button>
            <Chat component_img={<img src={obj} alt=''/>} setOpen={(val)=>setOpen(val)} open={open}/>
        </div>
    );
};

export default CardPhone;