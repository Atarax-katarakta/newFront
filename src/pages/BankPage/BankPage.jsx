import React from 'react';
import cls from "./BankPage.module.scss"
import invest from "../../assets/invest.png"
import sber from "../../assets/sber.png"
import {useParams} from "react-router-dom";
import {Typography} from "antd";

const BankPage = () => {
    const params = useParams()
    const arr = [
        {
            id: 1,
            name: "Центр-Инвест",
            description: "Банк «Центр-инвест» — крупнейший региональный банк Юга России. Банк входит в десятку лидеров рейтинга банков России, которые работают с МСБ, и занимает лидирующие позиции в России в кредитовании проектов малого и среднего бизнеса, модернизации предприятий, развитии женского, молодёжного, социального предпринимательства, а также поддерживает стартапы.\n" +
                "\n" +
                "Более 120 офисов банка расположены в шести регионах России: в Ростовской и Волгоградской областях, Краснодарском и Ставропольском краях, Нижнем Новгороде, а также в Москве",
            img: invest
        },
        {
            id: 2,
            name: "Сбербанк",
            description: "ПАО «Сберба́нк» (полное наименование — Публи́чное акционе́рное о́бщество «Сбербанк Росси́и»[5], зарегистрированная торговая марка «Сбер»; с 2022 года название приложения стилизуется как «СберБанк Онлайн») — российский финансовый конгломерат, крупнейший универсальный банк России и Восточной Европы. По итогам 2019 года у Сбербанка 96,2 миллионов активных частных клиентов и 2,6 миллиона активных корпоративных клиентов[6]. Среди крупнейших банков мира по размеру активов находится в восьмом десятке. Включён Банком России в перечень системно значимых кредитных организаций",
            img: sber
        }
    ]
    return (
        <div className={cls.wrapper}>
            {arr.map((item, i) => {
                if (item.id == params.id) {
                    return (
                        <>
                            <img src={item.img} alt={item.name}/>
                            <Typography.Title>{item.name}</Typography.Title>
                            <Typography.Text>{item.description}</Typography.Text>
                        </>
                    )
                }
            })}
        </div>
    );
};

export default BankPage;