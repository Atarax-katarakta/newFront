import React from 'react';
import {Button} from "antd";

const CardPhone = ({obj}) => {
    return (
        <div className='card_phone'>
            <img className='logo' src={obj} alt=''/>
            <Button type='primary'>Задать вопрос</Button>
        </div>
    );
};

export default CardPhone;