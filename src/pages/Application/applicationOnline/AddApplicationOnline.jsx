import React, {useState} from 'react';
import './style.css';
import SelectSearch from "../../../components/SelectSearch/SelectSearch";
import DropDown from "../../../components/DropDown/DropDown";
import {Button} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import ApplicationCity from "./ApplicationCity";
import ApplicationOnline from "./ApplicationOnline";
import ApplicationSpecialties from "./ApplicationSpecialties";
import {useGetAllTownQuery} from "../../../redux/api/applicationService";

class UniversityService {
    static async getAll() {
        return axios({
            method: 'get',
            url: ''
        });
    }
}

const AddApplicationOnline = () => {
    const [selectCity, setSelectCity] = useState();
    const [selectUniver, setSelectUniver] = useState();
    const [selectSpecialties, setSelectSpecialties] = useState();
    const steps = [
        {
            value: 'step2',
            component: <ApplicationOnline cityId={selectCity} setSelectFunc={(val) => setSelectUniver(val)}/>
        },
        {
            value: 'step3',
            component: <ApplicationSpecialties setSelectFunc={(val) => setSelectSpecialties(val)}
                                               univerId={selectUniver}/>
        }
    ]
    const [numberStep, setNumber] = useState(0)
    return (
        <div className='page_application_first'>
            <div className='h1'>Анкета для подачи заявки на онлайн образование</div>
            {steps[numberStep].component}
            {
                numberStep === 0 ? <Button onClick={() => setNumber(numberStep + 1)}>Далее</Button>
                    : numberStep === 1 &&
                    <div className='links'>
                        <Link to={"/credit_form"}>Посмотреть варианты кредитов и шанс одобрения+</Link>
                    </div>

            }
        </div>
    );
};

export default AddApplicationOnline;