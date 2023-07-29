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
                    <Title level={3}>Григорьев Иван Денисович</Title>
                    <Text>example@gmail.com</Text>
                    <Text>+7999999999</Text>
                </div>

            </div>
        </div>
    );
};

export default MainInfo;