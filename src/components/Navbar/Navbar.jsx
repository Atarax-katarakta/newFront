import React, {useState} from 'react';
import cls from "./Navbar.module.scss"
import logo from "../../assets/Vector.png"
import {Link} from "react-router-dom";
import {Button, Typography} from "antd";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"))
    return (
        <nav className={cls.Navbar}>
            <div className={cls.info}>
                <Link to={"/"}>
                    <img src={logo} alt=""/>
                </Link>
                <Link to="/application">
                    Подать заявку
                </Link>
            </div>
            <div>
                {isAuth
                    ?
                    <Link to="/profile">Профиль</Link>
                    :
                    <Button type="danger">
                        <Link to={"/auth/login"}>Войти</Link>
                    </Button>
                }
                {

                }
            </div>
        </nav>
    );
};

export default Navbar;