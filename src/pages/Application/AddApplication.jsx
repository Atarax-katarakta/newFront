import React from 'react';
import './style.css';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import DropDown from "../../components/DropDown/DropDown";

const AddApplication = () => {
    return (
        <div className='page_application_first'>
            <div className='h1'>Анкета</div>

            <div className='block'>
                <div className='title'>Выберите регион: </div>
                <SelectSearch placeholder='Регион'/>
            </div>
            <div className='block'>
                <div className='title'>Выберите город: </div>
                <SelectSearch/>
            </div>
            <div className='block'>
                <div className='title'>Выберите направления: </div>
                <SelectSearch/>
            </div>
            <DropDown title={'Drop'} description={'ttttttttttttttttttt'}/>
        </div>
    );
};

export default AddApplication;