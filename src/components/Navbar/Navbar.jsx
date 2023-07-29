import React from 'react';
import cls from "./Navbar.module.scss"
import logo from "../../assets/Vector.png"
import {Link} from "react-router-dom";
import {Typography} from "antd";

const Navbar = () => {
    return (
        <nav className={cls.Navbar}>
            <div className={cls.info}>
                <img src={logo} alt=""/>
                <Typography.Link style={{fontFamily: 'Montserrat'}}>
                    <Link to="/applications">
                        Заявки
                    </Link>
                </Typography.Link>
                <Typography.Link style={{fontFamily: 'Montserrat'}}>
                    <Link to="/new">
                        Подать заявку
                    </Link>
                </Typography.Link>
            </div>
            <div>
                <Typography.Link style={{fontFamily: 'Montserrat'}}>
                    <Link to="/profile">Профиль</Link>
                </Typography.Link>
            </div>
        </nav>
    );
};

export default Navbar;