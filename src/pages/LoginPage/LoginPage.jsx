import React from 'react';
import cls from "./LoginPage.module.scss"
import {Button, Typography} from "antd";
import gos from "../../assets/gos.png"
import {Link, useNavigate} from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate()
    const handleAuth = () => {

        localStorage.setItem("auth", "true")
        setTimeout(() => {
            navigate("/")
            setTimeout(() => {
                window.location.reload();
            }, 500)
        }, 1000)
    }
    return (
        <div className={cls.Login}>
            <form className={cls.form}>
                <Button onClick={handleAuth} size={"large"}>Войти</Button>
                <Button size={"large"}>
                    Войти через
                    <img src={gos} alt=""/>
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;