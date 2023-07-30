import React from 'react';
import cl from './style.module.css'
import arrowRight from './arrow_right.svg'
import {Link} from "react-router-dom";

const ChooseApplication = () => {
    return (
        <div className={cl.choose_application}>
            <div className={cl.block}>
                <Link to='/application_univer'>Подать заявку в учебное учреждение</Link>
                <img src={arrowRight} alt='/'/>
            </div>
            <div className={cl.block}>
                <Link to='/application_online'>Подать заявку по онлайн образованию</Link>
                <img src={arrowRight} alt='/'/>
            </div>
            <div className={cl.block}>
                <Link to='/application_course'>Подать заявку на дополнительные курсы от университетов</Link>
                <img src={arrowRight} alt='/'/>
            </div>
        </div>
    );
};

export default ChooseApplication;