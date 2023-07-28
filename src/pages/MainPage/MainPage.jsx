import React from 'react';
import cls from "./MainPage.module.scss"
import {Menu, Typography} from "antd";
import DropDown from "../../components/DropDown/DropDown";

const MainPage = () => {

    const onClick = (e) => {
        console.log('click ', e);
    };
    return (

        <div className={cls.Main}>
            <div className={cls.hero}>
                placeholdrer
            </div>
           <div className={cls.stages}>
               <Typography.Title level={2}>
                   Как работает наш сервис
               </Typography.Title>
               <DropDown title={"1 этап"} description={"Какая то хуета"}/>
               <DropDown title={"2 этап"} description={"Какая то хуета"}/>
               <DropDown title={"3 этап"} description={"Какая то хуета"}/>
           </div>

            <div>
                <Typography.Title level={2}>
                    Акции и спецпредложения
                </Typography.Title>
            </div>
        </div>
    );
};

export default MainPage;