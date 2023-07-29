import React from 'react';
import sber from './image/sber.svg'
import alfa from './image/alfa_bank.svg'
import vtb from './image/vtb.png'
import center from './image/logo_center_invest.svg'
import CardPhone from "./CardPhone";
import './style.css'

const HotLine = () => {
    return (
        <div className='hot_line'>
            <CardPhone obj={sber}/>
            <CardPhone obj={alfa}/>
            <CardPhone obj={vtb}/>
            <CardPhone obj={center}/>
        </div>
    );
};

export default HotLine;