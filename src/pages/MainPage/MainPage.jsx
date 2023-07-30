import React from 'react';
import cls from "./MainPage.module.scss"
import {Button, Collapse, Menu, Typography} from "antd";
import hero from "../../assets/hero.svg"
import Suggestions from "../../components/Suggestions/Suggestions";
import {useGetUniversityQuery} from "../../redux/api/universityApi";
import {Link} from "react-router-dom";
import RecommendedCourses from "../../components/RecommendedCourses/RecommendedCourses";
import HotLine from "../../components/HotLine/HotLine";

const {Panel} = Collapse
const DropDown = ({title, description}) => {
    return (
        <Collapse
            size={"large"}>
            <Panel header={title} key="1">
                <p>{description}</p>
            </Panel>
        </Collapse>
    );
};
const MainPage = () => {


    const onClick = (e) => {
        console.log('click ', e);
    };
    return (

        <div className={cls.Main}>
            <div className={cls.hero}>
                <img src={hero} alt=""/>
                <Typography.Title>
                    Делаем поступление в разы легче
                </Typography.Title>
                <Typography.Text>Выбирайте и управляйте финансовыми продуктами в одном личном кабинете</Typography.Text>
            </div>
            <div className={cls.stages}>
                <Typography.Title level={2}>
                    Как работает наш сервис
                </Typography.Title>
            </div>
            <div className={cls.collapse}>
                <DropDown
                    title={"Заполните заявку"}
                    description={
                        "Вы можете выбрать один из двух способов начала заполнения заявки – с использованием подтверждённой учётной записи Госуслуг или с регистрацией по номеру телефона. В первом случае Вы сможете оформить как кредиты \"не выходя из дома\", так и с посещением офиса банка. Во втором случае Вы сможете отправить заявку на рассмотрение только в те банки, которые предлагают оформление в офисе, но Вам не потребуется вводить логин и пароль от учётной записи на Госуслугах. И заявку Вам надо будет заполнять всего одну, а направить её сможете в любое количество выбранных банков!"
                    }
                />
                <DropDown
                    title={"Выберите подходящие предложения"}
                    description={
                        "На основании Ваших пожеланий, Вашего кредитного рейтинга, а также требований банков к заёмщикам мы покажем Вам самые подходящие предложения с наибольшей вероятностью одобрения. Вы сами сможете выбрать в какие банки отправить заявку на кредит."
                    }
                />
                <DropDown
                    title={"Заполните заявку/заявки в учебные учреждения"}
                    description={
                        "На основании ваших данных, ваши документы будут отправлены в любой из выбранных учебных учреждений на различные направление"
                    }
                />
                <DropDown
                    title={"Ждите результатов"}
                    description={"Дождитесь результатов поступления. Далее вы сможете оформить кредит в выбранных ранее банках"}
                />
                <DropDown
                    title={"Получите кредит онлайн или в отделении банка"}
                    description={
                        "Если Вы выберите предложение одного из наших онлайн-кредитов, то после отправки заявки в банк Вы сможете встретиться с представителем нашего сервиса, который приедет в удобное место и время. Он сфотографирует Вас и подтвердит Вашу личность, после чего Вы сможете подписать кредитный договор онлайн и выбрать на какой счёт зачислить деньги. Если Вы выберите предложение от банка с получением в офисе, то после отправки заявки в банк с Вами свяжется специалист и детально расскажет о дальнейших шагах и способе встречи с представителем банка."
                    }
                />
                <DropDown
                    title={"Будьте спокойны за сохранность ваших данных"}
                    description={
                        "Вне зависимости от того, каким способом вы зарегистрируетесь на нашем сервисе и в какой из банков отправите заявку, Ваши данные будут надёжно защищены. Финуслуги, как часть Московской биржи, обеспечивают высочайший уровень безопасности персональных данных."
                    }
                />
            </div>
            <div>
                <Typography.Title level={2}>
                    Акции и спецпредложения
                </Typography.Title>
                <Suggestions/>
            </div>
            <div>
                <Typography.Title>
                    Еще не определились со специальностью?
                </Typography.Title>
                <Button>
                    <Link to={"/survey"}>Пройти опрос</Link>
                </Button>
            </div>
            <div>
                <Typography.Title>Рекомендуемые курсы</Typography.Title>
                <RecommendedCourses/>
            </div>
            <div>
                <Typography.Title>
                    Есть вопросы? Напишите!
                </Typography.Title>
                <HotLine/>
            </div>
        </div>
    );
};

export default MainPage;