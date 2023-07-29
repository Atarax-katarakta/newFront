import React, { useState, useEffect } from 'react';
import cls from './Suggestions.module.scss';
import { Button, Typography } from 'antd';

const Suggestions = () => {
    const [randomIndices, setRandomIndices] = useState([]);

    useEffect(() => {
        const childCount = 6; // Total number of child elements
        const randomIndices = [];
        while (randomIndices.length < 2) {
            const randomNumber = Math.floor(Math.random() * childCount);
            if (!randomIndices.includes(randomNumber)) {
                randomIndices.push(randomNumber);
            }
        }
        setRandomIndices(randomIndices);
    }, []);

    const childData = [
        { title: 'Карта пропуска для студентов', buttonText: 'Узнать подробнее' },
        { title: 'Квартирная ипотека', buttonText: 'Узнать подробнее' },
        { title: 'Рассрочка на технику', buttonText: 'Узнать подробнее' },
        { title: 'Вклады', buttonText: 'Узнать подробнее' },
        { title: 'Рассрочка на технику', buttonText: 'Узнать подробнее' },
        { title: 'Вклады', buttonText: 'Узнать подробнее' },
    ];

    return (
        <div className={cls.parent}>
            {randomIndices.map((index) => (
                <div key={index} className={cls.child}>
                    <Typography.Title>{childData[index].title}</Typography.Title>
                    <Button>{childData[index].buttonText}</Button>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;
