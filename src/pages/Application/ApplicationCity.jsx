import React, {useState} from 'react';
import SelectSearch from "../../components/SelectSearch/SelectSearch";
import {useGetAllTownQuery} from "../../redux/api/applicationService";

const ApplicationCity = ({setSelectFunc}) => {
    const {data, error, isLoading} = useGetAllTownQuery();
    const options= []
    if (data){
        data.results.map((el)=>{
            options.push({value: el.title, label: el.title})
        })
    }

    return (
        <div className='block'>
            <div className='title'>Выберите город: </div>
            <SelectSearch options={options} placeholder='Город' changeFunc={(val, option)=>setSelectFunc(val)}/>
        </div>
    );
};

export default ApplicationCity;