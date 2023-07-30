import React from 'react';
import cl from './style.module.scss'
import arrowRight from './arrow_right.svg'
import {Link} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";

const ChooseApplication = () => {
    return (
        <div className={cl.choose_application}>
            <div className={cl.block}>
                <Link to='/application_univer'>Подать заявку в учебное учреждение</Link>
                <ArrowRightOutlined />
            </div>
            <div className={cl.block}>
                <Link to='/application_online'>Подать заявку по онлайн образованию</Link>
                <ArrowRightOutlined />
            </div>
            <div className={cl.block}>
                <Link to='/application_course'>Подать заявку на дополнительные курсы от университетов</Link>
                <ArrowRightOutlined />
            </div>
        </div>
    );
};

export default ChooseApplication;