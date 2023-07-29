import React from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import {useGetSpecialtyByUniverQuery} from "../../redux/api/applicationService";

const ApplicationSpecialties = ({setSelectFunc, univerId}) => {
    const {data, error, isLoading} = useGetSpecialtyByUniverQuery(univerId)
    const newArray = []
    if (data){
         
    }
    return (
        <div className='block'>
            <div className='title'>Выберите специальность: </div>
            <SelectSearch/>
        </div>
    );
};

export default ApplicationSpecialties;