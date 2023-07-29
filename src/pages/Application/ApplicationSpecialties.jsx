import React from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";

const ApplicationSpecialties = ({setSelectFunc, univerId}) => {
    return (
        <div className='block'>
            <div className='title'>Выберите специальность: </div>
            <SelectSearch/>
        </div>
    );
};

export default ApplicationSpecialties;