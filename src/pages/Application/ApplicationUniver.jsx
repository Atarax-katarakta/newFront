import React from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";

const ApplicationUniver = ({setSelectFunc, cityId}) => {
    return (
        <div className='block'>
            <div className='title'>Выберите университет: </div>
            <SelectSearch/>
        </div>
    );
};

export default ApplicationUniver;