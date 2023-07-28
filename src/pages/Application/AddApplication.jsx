import React from 'react';
import './style.css';
import SelectSearch from "../../components/SelectSearch/SelectSearch";

const AddApplication = () => {
    return (
        <div className='page_application_first'>
            <div className='h1'>Анкета</div>

            <div className='block'>
                <div className='title'>Выберите регион: </div>
                <SelectSearch/>
            </div>
            <div className='block'>
                <div className='title'>Выберите город: </div>
                <SelectSearch/>
            </div>
            <div className='block'>
                <div className='title'>Выберите направления: </div>
                <SelectSearch/>
            </div>
        </div>
    );
};

export default AddApplication;