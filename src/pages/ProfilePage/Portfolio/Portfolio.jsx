import React from 'react';
import {Table} from "antd";

const Portfolio = () => {
    const columns = [
        {
            title: 'Название учебного заведения',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Курс',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Специальность',
            dataIndex: 'course',
            key: 'course',
        },
        {
            title: 'Дата начала обучения',
            dataIndex: 'begin',
            key: 'begin',
        },
        {
            title: 'Дата конца обучения',
            dataIndex: 'end',
            key: 'end',
        },

    ];
    const dataSource = [
        {
            key: '1',
            name: 'Кубанский государственный университет',
            age: 2,
            course: 'Математика и компьютерные науки',
            begin: 2021,
            end: 2025
        },
        {
            key: '2',
            name: 'Кубанский государственный аграрный университет',
            age: 3,
            course: 'География',
            begin: 2020,
            end: 2024
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    );
};

export default Portfolio;