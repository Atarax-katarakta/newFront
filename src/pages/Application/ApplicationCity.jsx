import React from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";

const ApplicationCity = ({setSelectFunc}) => {
    return (
        <div className='block'>
            <div className='title'>Выберите город: </div>
            <SelectSearch/>
        </div>
    );
};

export default ApplicationCity;