import React from 'react';
import SelectSearch from "../../../components/SelectSearch/SelectSearch";
import {useGetSpecialtyByUniverQuery} from "../../../redux/api/applicationService";

const ApplicationSpecialties = ({setSelectFunc, univerId}) => {
    const newArray = [
        {
            label: "Машинное обучние",
            value: "Машинное обучние",
        },
        {
            label: "Frontend разработка",
            value: "Frontend разработка",
        }
    ]
    return (
        <div className='block'>
            <div className='title'>Выберите специальность: </div>
            <SelectSearch options={newArray} changeFunc={(val, opt)=>setSelectFunc(val)}/>
        </div>
    );
};

export default ApplicationSpecialties;