import React from 'react';
import SelectSearch from "../../../components/SelectSearch/SelectSearch";
import {useGetUnversityByTownQuery} from "../../../redux/api/applicationService";

const ApplicationUniver = ({setSelectFunc, cityId}) => {
    const {data, error, isLoading} = useGetUnversityByTownQuery(cityId);
    const newArray = [];
    // console.log(data.results, cityId)
    if (data){
        data.results.map(el=>{
            newArray.push({value: el.title, label: el.title, id: el.pk})
        })
    }

    return (
        <div className='block'>
            <div className='title'>Выберите университет: </div>
            <SelectSearch options={newArray} placeholder={"Университет"} changeFunc={(val, option)=>setSelectFunc(option.id)}/>
        </div>
    );
};

export default ApplicationUniver;