import React, {useState} from 'react';
import './style.css';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import DropDown from "../../components/DropDown/DropDown";
import {Button} from "antd";
import {Link} from "react-router-dom";

const AddApplication = () => {
    const [selectCity, setSelectCity] = useState();
    const [selectUniver, setSelectUniver] = useState();
    const [selectSpecialties, setSelectSpecialties] = useState();

    return (
        <div className='page_application_first'>
            <div className='h1'>Анкета</div>
            <div className='block'>
                <div className='title'>Выберите город: </div>
                <SelectSearch/>
            </div>
            <div className='block'>
                <div className='title'>Выберите ВУЗ: </div>
                <SelectSearch/>
            </div>
            <div className='block'>
                <div className='title'>Выберите направления: </div>
                <SelectSearch/>
            </div>
            <Link to='/application/1/1/1'>
                Далее
            </Link>
        </div>
    );
};

export default AddApplication;