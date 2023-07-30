import React from 'react';
import CardPhone from "./CardPhone";
import './style.css'

const HotLine = () => {
    return (
        <div className='hot_line'>
            <CardPhone obj={'/image/sber.svg'}/>
            <CardPhone obj={'/image/alfa_bank.svg'}/>
            <CardPhone obj={'/image/vtb.png'}/>
            <CardPhone obj={'/image/logo_center_invest.svg'}/>
        </div>
    );
};

export default HotLine;