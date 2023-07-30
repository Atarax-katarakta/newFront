import React from 'react';
import SelectSearch from "../../../components/SelectSearch/SelectSearch";
import {useGetUnversityByTownQuery} from "../../../redux/api/applicationService";

const ApplicationOnline = ({setSelectFunc, cityId}) => {
    const newArray = [
        {
            label: "Skillbox",
            value: "Skillbox"
        },
        {
            label: "Geekbrains",
            value: "Geekbrains",
        },
        {
            label: "XYZ school",
            value: "XYZ school",
        }
    ];
    // console.log(data.results, cityId)


    return (
        <div className='block'>
            <div className='title'>Выберите образовательную площадку:</div>
            <SelectSearch options={newArray} placeholder={"Площадка"}
                          changeFunc={(val, option) => setSelectFunc(val)}/>
        </div>
    );
};

export default ApplicationOnline;