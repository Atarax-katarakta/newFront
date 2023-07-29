import React from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import {useGetSpecialtyByUniverQuery} from "../../redux/api/applicationService";

const ApplicationSpecialties = ({setSelectFunc, univerId}) => {
    const {data, error, isLoading} = useGetSpecialtyByUniverQuery(univerId)
    const newArray = []
    if (data){
         data.results.map((el)=>{
             newArray.push({value: el.speciality.title, label: el.speciality.title, id_code: el.speciality.code})
         })
    }
    return (
        <div className='block'>
            <div className='title'>Выберите специальность: </div>
            <SelectSearch options={newArray} changeFunc={(val, opt)=>setSelectFunc(opt.id_code)}/>
        </div>
    );
};

export default ApplicationSpecialties;