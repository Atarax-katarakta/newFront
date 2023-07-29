import React, {useState} from 'react';
import './style.css';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import DropDown from "../../components/DropDown/DropDown";
import {Button} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import ApplicationCity from "./ApplicationCity";
import ApplicationUniver from "./ApplicationUniver";
import ApplicationSpecialties from "./ApplicationSpecialties";
import {useGetAllTownQuery} from "../../redux/api/applicationService";

class UniversityService {
    static async getAll() {
        return axios({
            method: 'get',
            url: ''
        });
    }
}

const AddApplication = () => {
    const [selectCity, setSelectCity] = useState();
    const [selectUniver, setSelectUniver] = useState();
    const [selectSpecialties, setSelectSpecialties] = useState();
    const steps = [
        {
            value: 'step1',
            component: <ApplicationCity setSelectFunc={(val) => setSelectCity(val)}/>
        },
        {
            value: 'step2',
            component: <ApplicationUniver cityId={selectCity} setSelectFunc={(val) => setSelectUniver(val)}/>
        },
        {
            value: 'step3',
            component: <ApplicationSpecialties setSelectFunc={(val) => setSelectSpecialties(val)} univerId={selectUniver}/>
        }
    ]
    const [numberStep, setNumber] = useState(0)
    return (
        <div className='page_application_first'>
            <div className='h1'>Анкета</div>
            {steps[numberStep].component}
            {
                numberStep === 0 ? selectCity ? <Button onClick={() => setNumber(numberStep + 1)}>Далее</Button>
                        : <div></div>
                    : numberStep === 1 ? selectUniver ?
                            <Button onClick={() => setNumber(numberStep + 1)}>Далее</Button>
                            : <div></div>
                        : numberStep === 2 ? selectCity && selectUniver && selectSpecialties ?
                                <div className='links'>
                                    <Link to={"/upload"}>Отправить заявку в учебное учреждение на бюджетной основе</Link>
                                    <Link to={"/credit_calculate"}>Посмотреть варианты кредитов и шанс одобрения+</Link>
                                </div>
                                : <div></div>
                            : <div></div>
            }
        </div>
    );
};

export default AddApplication;