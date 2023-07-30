import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import cls from "./UniversityPage.module.scss"
import unik from "../../assets/kubsu.jpg"
import {Button, Drawer, Tag, Typography} from "antd";
import DropDown from "../../components/DropDown/DropDown";
import {useGetUniversityQuery} from "../../redux/api/universityApi";

const UniversityPage = () => {
    const params = useParams()
    const {data, error, isLoading} = useGetUniversityQuery(params.id);
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const showDrawer = (course) => {
        setSelectedCourse(course);
    };

    const onClose = () => {
        setSelectedCourse(null);
    };

    const {id} = useParams()
    if (data) {
        if (data.results.length) {
            return (
                <div className={cls.University}>
                    {data.results[0].university.image && <img src={data.results[0].university.image} alt=""/>
                    }
                    <Typography.Title>{data.results[0].university.title}</Typography.Title>
                    <div className={cls.info}>
                        <Typography.Title level={2}>
                            Направления
                        </Typography.Title>
                        <ul className={cls.specialities}>
                            {data.results.map((item => (
                                <li key={item.id} className={cls.speciality}>
                                    <Typography.Text>
                                        {item.speciality.title}
                                    </Typography.Text>
                                    <Button onClick={() => showDrawer(item)} size={"small"}>Посмотреть подробнее</Button>
                                </li>
                            )))}
                        </ul>
                    </div>
                    <Drawer
                        bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 40}}
                        title={selectedCourse ? selectedCourse.name : ''}
                        placement="left"
                        onClose={onClose}
                        open={selectedCourse !== null}
                    >
                        {selectedCourse && (
                            <div className={cls.drawer}>
                                <Typography.Text>Код направления: <p>{selectedCourse.speciality.code}</p></Typography.Text>
                                <Typography.Text>Минимальный балл для бюджета: <p>{selectedCourse.budget_passing_score}</p>
                                </Typography.Text>
                                <Typography.Text>Минимальный балл для
                                    коммерции: <p>{selectedCourse.contract_passing_score}</p></Typography.Text>
                                <Typography.Text>
                                    Описание: <p>{selectedCourse.speciality.description}</p>
                                </Typography.Text>
                                <Typography.Text>Стоимость обучения: <p>{selectedCourse.price}р/год</p></Typography.Text>
                                <Typography.Text>Количество бюджетных мест: <p>{selectedCourse.budget_places}</p>
                                </Typography.Text>
                                <Typography.Text>Количество платных мест: <p>{selectedCourse.contract_places}</p>
                                </Typography.Text>
                            </div>
                        )}
                        <Button>Перейти к анкете</Button>
                    </Drawer>

                </div>
            );
        }
        else {
            return (
                <div className={cls.notFound}>404 Страница не найдена</div>
            )
        }
    }


};

export default UniversityPage;