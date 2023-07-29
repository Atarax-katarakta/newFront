import React from 'react';
import {Button, Space, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const UniversityRequest = () => {
    const columns = [
        {
            title: 'Название организации',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Link to="/university/1">{text}</Link>,
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Специальность',
            dataIndex: 'course',
            key: 'course',
        },
        {
            title: "Форма обучения",
            dataIndex: 'form',
            key: 'form',
        },
        {
            title: 'Теги',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, {tags}) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Ответ',
            key: 'answer',
            render: (_, {answer}) => (
                <>
                    {<Tag color={answer ? "green" : "red"} key={_}>
                        {answer ? "Одобрено" : "Отклонено"}
                    </Tag>}
                </>
            )
        },
        {
            title: "Действие",
            key: 'action',
            render: (_, record) => {
                if (record.answer) {
                    return (
                        <Button>
                            Посмотреть условия
                        </Button>
                    )
                }
            }
        }
    ];
    const data = [
        {
            key: '1',
            name: 'Кубанский государственный университет',
            address: "г.Краснрдар, ул.Ставропольская, 149",
            course: "Математика и компьютерные науки (бакалавриат)",
            form: "Договор",
            tags: ['математика'],
            answer: true
        },
        {
            key: '2',
            name: 'Кубанский государственный технический университет',
            address: "г. Краснодар, ул. Московская, д. 2",
            course: "Математика и компьютерные науки (бакалавриат)",
            form: "Договор",
            tags: ['математика'],
            answer: false
        },
        {
            key: '3',
            name: 'Кубанский государственный аграрный университет',
            address: "г. Краснодар, ул. Калинина, 13.",
            course: "Разведение, селекция и генетика сельскохозяйственных животных,",
            form: "Договор",
            tags: ['животные'],
            answer: false
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
};

export default UniversityRequest;