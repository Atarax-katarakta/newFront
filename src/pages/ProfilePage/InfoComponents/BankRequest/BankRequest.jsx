import React from 'react';
import {Button, Space, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const BankRequest = () => {
    const columns = [
        {
            title: 'Название организации',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Link to="/university/1">{text}</Link>,
        },
        {
            title: 'Тип услуги',
            dataIndex: 'service',
            key: 'service',
        },
        {
            title: "Сумма",
            dataIndex: 'sum',
            key: 'sum',
        },
        {
            title: "Срок",
            dataIndex: 'term',
            key: 'term',
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
                            Подробнее
                        </Button>
                    )
                }
            }
        }
    ];
    const data = [
        {
            key: '1',
            name: 'Центр-Инвест',
            service: "Студенческая ипотека",
            sum: "1350000р",
            term: "2 года",
            answer: true
        },
        {
            key: '2',
            name: 'Кубань Кредит',
            service: "Студенческая ипотека",
            sum: "2350000р",
            term: "4 года",
            answer: false
        },
        {
            key: '3',
            name: 'Сбербанк',
            service: "Заем",
            sum: "50000р",
            term: "1 год",
            answer: true
        },

    ];

    return (
        <div>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
};

export default BankRequest;