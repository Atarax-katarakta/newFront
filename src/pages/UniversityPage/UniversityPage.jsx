import React from 'react';
import {useParams} from "react-router-dom";
import cls from "./UniversityPage.module.scss"
import unik from "../../assets/kubsu.jpg"
import {Typography} from "antd";
import DropDown from "../../components/DropDown/DropDown";

const UniversityPage = () => {
    const universityInfo = {
        name: "Кубанский государственный университет",
        description: "Куба́нский госуда́рственный университе́т (КубГУ) — высшее учебное заведение в Краснодаре. Является одним из крупнейших и старейших университетов юга России.",
        faculty: [
            {
                name: "Институт среднего профессионального образования КубГУ (ИНСПО КубГУ)",
                text: "Ну ИНСПО и ИНСПО, парашники"
            },
            {
                name: "Математики и компьютерных наук",
                text: "-Математика (бакалавриат) \t" +
                    "-Математика и компьютерные науки (бакалавриат)\n" +
                    "-Педагогическое образование по двойному профилю «информатика» и «математика» (бакалавриат)\n" +
                    "Фундаментальная математика и механика (специалитет)\n"
            }
        ]
    }
    const {id} = useParams()
    return (
        <div className={cls.University}>
            <div className={cls.image}>
                <img src={unik} alt=""/>
                <Typography.Title>{universityInfo.name}</Typography.Title>
            </div>
            <div className={cls.info}>
                <Typography.Text>{universityInfo.description}</Typography.Text>
                <div className={cls.faculty}>
                    <Typography.Title level={2}>
                        Факультеты
                    </Typography.Title>
                    {universityInfo.faculty.map(item => (
                        <DropDown title={item.name} description={item.text}/>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default UniversityPage;