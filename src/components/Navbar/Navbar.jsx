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
                <img src={logo} alt=""/>
                <Typography.Link style={{fontFamily: 'Montserrat'}}>
                    <Link to="/application">
                        Подать заявку
                    </Link>
                </Typography.Link>
            </div>
            <div>
                {isAuth
                    ?
                    <Typography.Link style={{fontFamily: 'Montserrat'}}>
                        <Link to="/profile">Профиль</Link>
                    </Typography.Link>
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