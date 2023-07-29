import React from 'react';
import cl from './SelectSearch.module.css';
import {Select} from "antd";

const SelectSearch = ({placeholder, options, disabled=false}) => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <Select
            showSearch
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={options}
            disabled={disabled}
        />
    );
};

export default SelectSearch;