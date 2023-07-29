import React from 'react';
import {useParams} from "react-router-dom";
import cls from "./UniversityPage.module.scss"
import unik from "../../assets/kubsu.jpg"
import {Typography} from "antd";
import DropDown from "../../components/DropDown/DropDown";
import {useGetUniversityQuery} from "../../redux/api/universityApi";

const UniversityPage = () => {
    const { data, error, isLoading } = useGetUniversityQuery(1);

    const universityInfo = {
        name: "Кубанский государственный университет",
        description:
            "Куба́нский госуда́рственный университе́т (КубГУ) — высшее учебное заведение в Краснодаре. Является одним из крупнейших и старейших университетов юга России.",
        faculty: [
            {
                name: "Компьютерных технологий и прикладной математики",
                courses: [
                    {
                        name: "Фундаментальные информатика и информационные технологии (бакалавриат)",
                        code: "01.03.02",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 50,
                        paidSeats: 30,
                    },
                    {
                        name: "Прикладная математика и информатика (бакалавриат)",
                        code: "01.03.02",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 40,
                        paidSeats: 25,
                    },
                    {
                        name: "Математическое обеспечение и администрирование информационных систем (бакалавриат)",
                        code: "09.03.03",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 60,
                        paidSeats: 20,
                    },
                    {
                        name: "Прикладная информатика (бакалавриат)",
                        code: "09.03.03",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 45,
                        paidSeats: 15,
                    },
                ],
            },
            {
                name: "Математики и компьютерных наук",
                courses: [
                    {
                        name: "Математика (бакалавриат)",
                        code: "01.03.01",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["математика"],
                        budgetSeats: 70,
                        paidSeats: 30,
                    },
                    {
                        name: "Математика и компьютерные науки (бакалавриат)",
                        code: "02.03.01",
                        minScoreBudget: 240,
                        minScoreCommerce: 170,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "170000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 80,
                        paidSeats: 35,
                    },
                    {
                        name: "Педагогическое образование по двойному профилю «информатика» и «математика» (бакалавриат)",
                        code: "44.03.05",
                        minScoreBudget: 210,
                        minScoreCommerce: 140,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "140000 руб. в год",
                        },
                        requiredExams: ["математика", "информатика"],
                        budgetSeats: 55,
                        paidSeats: 25,
                    },
                    {
                        name: "Фундаментальная математика и механика (специалитет)",
                        code: "01.04.01",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["математика", "физика"],
                        budgetSeats: 30,
                        paidSeats: 15,
                    },
                ],
            },
            {
                name: "Юридический факультет",
                courses: [
                    {
                        name: "Юриспруденция (бакалавриат)",
                        code: "40.03.01",
                        minScoreBudget: 240,
                        minScoreCommerce: 170,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "170000 руб. в год",
                        },
                        requiredExams: ["обществознание", "история", "российский язык"],
                        budgetSeats: 90,
                        paidSeats: 40,
                    },
                    {
                        name: "Гражданское право (магистратура)",
                        code: "40.04.01",
                        minScoreBudget: 250,
                        minScoreCommerce: 180,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "180000 руб. в год",
                        },
                        requiredExams: ["гражданское право", "гражданско-процессуальное право"],
                        budgetSeats: 40,
                        paidSeats: 20,
                    },
                    {
                        name: "Уголовное право и криминология (бакалавриат)",
                        code: "40.03.03",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["обществознание", "история", "российский язык"],
                        budgetSeats: 80,
                        paidSeats: 30,
                    },
                    {
                        name: "Международное право (магистратура)",
                        code: "40.04.03",
                        minScoreBudget: 250,
                        minScoreCommerce: 180,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "180000 руб. в год",
                        },
                        requiredExams: ["международное право", "иностранный язык"],
                        budgetSeats: 30,
                        paidSeats: 15,
                    },
                ],
            },
            {
                name: "Факультет иностранных языков и межкультурной коммуникации",
                courses: [
                    {
                        name: "Лингвистика (бакалавриат)",
                        code: "45.03.02",
                        minScoreBudget: 200,
                        minScoreCommerce: 130,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "130000 руб. в год",
                        },
                        requiredExams: ["иностранный язык", "литература"],
                        budgetSeats: 70,
                        paidSeats: 25,
                    },
                    {
                        name: "Международные отношения (бакалавриат)",
                        code: "41.03.05",
                        minScoreBudget: 210,
                        minScoreCommerce: 140,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "140000 руб. в год",
                        },
                        requiredExams: ["иностранный язык", "история", "обществознание"],
                        budgetSeats: 80,
                        paidSeats: 35,
                    },
                    {
                        name: "Перевод и переводоведение (бакалавриат)",
                        code: "45.03.03",
                        minScoreBudget: 200,
                        minScoreCommerce: 130,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "130000 руб. в год",
                        },
                        requiredExams: ["иностранный язык", "литература"],
                        budgetSeats: 60,
                        paidSeats: 20,
                    },
                    {
                        name: "Педагогическое образование по двум иностранным языкам (бакалавриат)",
                        code: "44.03.05",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["иностранные языки", "педагогика"],
                        budgetSeats: 50,
                        paidSeats: 15,
                    },
                ],
            },
            {
                name: "Физический факультет",
                courses: [
                    {
                        name: "Физика (бакалавриат)",
                        code: "03.03.01",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["физика", "математика"],
                        budgetSeats: 50,
                        paidSeats: 30,
                    },
                    {
                        name: "Физика элементарных частиц и астрофизика (магистратура)",
                        code: "03.04.02",
                        minScoreBudget: 240,
                        minScoreCommerce: 170,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "170000 руб. в год",
                        },
                        requiredExams: ["физика", "математика"],
                        budgetSeats: 30,
                        paidSeats: 15,
                    },
                    {
                        name: "Физическая культура (бакалавриат)",
                        code: "49.03.01",
                        minScoreBudget: 200,
                        minScoreCommerce: 130,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "130000 руб. в год",
                        },
                        requiredExams: ["биология", "физика"],
                        budgetSeats: 40,
                        paidSeats: 20,
                    },
                    {
                        name: "Общая и прикладная физика (специалитет)",
                        code: "03.05.01",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["физика", "математика"],
                        budgetSeats: 20,
                        paidSeats: 10,
                    },
                ],
            },
            {
                name: "Факультет истории и филологии",
                courses: [
                    {
                        name: "История (бакалавриат)",
                        code: "46.03.01",
                        minScoreBudget: 210,
                        minScoreCommerce: 140,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "140000 руб. в год",
                        },
                        requiredExams: ["история", "обществознание"],
                        budgetSeats: 60,
                        paidSeats: 25,
                    },
                    {
                        name: "Филология (бакалавриат)",
                        code: "45.03.01",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["литература", "русский язык"],
                        budgetSeats: 80,
                        paidSeats: 30,
                    },
                    {
                        name: "Культурология (бакалавриат)",
                        code: "51.03.04",
                        minScoreBudget: 200,
                        minScoreCommerce: 130,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "130000 руб. в год",
                        },
                        requiredExams: ["литература", "русский язык", "история"],
                        budgetSeats: 70,
                        paidSeats: 25,
                    },
                    {
                        name: "Мировая литература (магистратура)",
                        code: "45.04.01",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["литература", "иностранный язык"],
                        budgetSeats: 40,
                        paidSeats: 20,
                    },
                ],
            },
            {
                name: "Факультет журналистики и рекламы",
                courses: [
                    {
                        name: "Журналистика (бакалавриат)",
                        code: "42.03.01",
                        minScoreBudget: 210,
                        minScoreCommerce: 140,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "140000 руб. в год",
                        },
                        requiredExams: ["литература", "обществознание"],
                        budgetSeats: 50,
                        paidSeats: 25,
                    },
                    {
                        name: "Реклама и связи с общественностью (бакалавриат)",
                        code: "42.03.02",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["литература", "обществознание", "математика"],
                        budgetSeats: 40,
                        paidSeats: 20,
                    },
                    {
                        name: "Издательское дело и редактирование (бакалавриат)",
                        code: "42.03.03",
                        minScoreBudget: 200,
                        minScoreCommerce: 130,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "130000 руб. в год",
                        },
                        requiredExams: ["литература", "обществознание"],
                        budgetSeats: 45,
                        paidSeats: 15,
                    },
                    {
                        name: "Телевидение и радиовещание (магистратура)",
                        code: "42.04.02",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["литература", "обществознание", "иностранный язык"],
                        budgetSeats: 30,
                        paidSeats: 10,
                    },
                ],
            },
            {
                name: "Биологический факультет",
                courses: [
                    {
                        name: "Биология (бакалавриат)",
                        code: "06.03.01",
                        minScoreBudget: 220,
                        minScoreCommerce: 150,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "150000 руб. в год",
                        },
                        requiredExams: ["биология", "химия"],
                        budgetSeats: 60,
                        paidSeats: 30,
                    },
                    {
                        name: "Экология и природопользование (бакалавриат)",
                        code: "05.03.06",
                        minScoreBudget: 210,
                        minScoreCommerce: 140,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "140000 руб. в год",
                        },
                        requiredExams: ["биология", "химия", "география"],
                        budgetSeats: 70,
                        paidSeats: 35,
                    },
                    {
                        name: "Генетика (магистратура)",
                        code: "06.04.01",
                        minScoreBudget: 230,
                        minScoreCommerce: 160,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "160000 руб. в год",
                        },
                        requiredExams: ["биология", "химия"],
                        budgetSeats: 30,
                        paidSeats: 15,
                    },
                    {
                        name: "Физиология человека и животных (магистратура)",
                        code: "06.04.02",
                        minScoreBudget: 240,
                        minScoreCommerce: 170,
                        tuitionFee: {
                            budget: "бесплатно",
                            commerce: "170000 руб. в год",
                        },
                        requiredExams: ["биология", "химия"],
                        budgetSeats: 25,
                        paidSeats: 10,
                    },
                ],
            },
        ],
    };


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
                        <DropDown title={item.name} description={item.courses}/>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default UniversityPage;