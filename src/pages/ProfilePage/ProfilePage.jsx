import React from 'react';
import cls from "./ProfilePage.module.scss"
import {Avatar, Col, Row, Typography} from "antd";
import { UserOutlined } from '@ant-design/icons';
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

const ProfilePage = () => {
    return (
        <div className={cls.Profile}>
            <Row style={{minHeight: "82vh"}}>
                <Col
                    style={{minHeight: "82vh"}}
                    span={5}
                    className={cls.menu}>
                    <div className={cls.label}>
                        <Avatar size={64} icon={<UserOutlined />} />
                        <Typography.Text>
                            Григорий Иван Дебилович
                        </Typography.Text>
                    </div>
                    <ProfileMenu/>
                </Col>
                <Col
                    offset={1}
                    span={18}
                    className={cls.info}
                >
                    124
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;