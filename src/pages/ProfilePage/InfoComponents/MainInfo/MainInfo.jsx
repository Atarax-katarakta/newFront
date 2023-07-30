import React from 'react';
import {Avatar, Typography} from "antd";
import cls from "./MainInfo.module.scss"
import {UserOutlined} from "@ant-design/icons";

const {Title, Text} = Typography

const MainInfo = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.profile}>
                <Avatar size={128} icon={<UserOutlined/>}/>
                <div className={cls.text}>
                    <Title level={3} style={{fontFamily: 'Montserrat', color: 'black'}}>Григорьев Иван Денисович</Title>
                    <Text style={{fontFamily: 'Montserrat', color: 'var(--gray)'}}>example@gmail.com</Text>
                    <Text style={{fontFamily: 'Montserrat', color: 'var(--gray)'}}>+7999999999</Text>
                </div>

            </div>
        </div>
    );
};

export default MainInfo;