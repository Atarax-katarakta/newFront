import React, {useState, useEffect} from 'react';
import cls from './Suggestions.module.scss';
import {Button, InputNumber, Modal, Slider, Typography} from 'antd';
import {DatePicker} from "antd";
import dayjs from "dayjs";

const {RangePicker} = DatePicker
const Suggestions = () => {
    const [randomIndices, setRandomIndices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState(1000);
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current <= dayjs().endOf('day');
    };
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
        {title: 'Карта пропуска для студентов', buttonText: 'Узнать подробнее'},
        {title: 'Квартирная ипотека', buttonText: 'Узнать подробнее'},
        {title: 'Рассрочка на технику', buttonText: 'Узнать подробнее'},
        {title: 'Вклады', buttonText: 'Узнать подробнее'},
        {title: 'Рассрочка на технику', buttonText: 'Узнать подробнее'},
        {title: 'Вклады', buttonText: 'Узнать подробнее'},
    ];

    return (
        <div className={cls.parent}>
            <Modal
                width={1000}
                bodyStyle={{display: "flex", flexDirection: "column", gap:20, padding: 30}}
                open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Typography.Title level={2}>
                    Выберите сумму
                </Typography.Title>
                <div className={cls.slider}>
                    <Slider
                        step={1000}
                        min={1000}
                        max={200000}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                    <InputNumber
                        min={1000}
                        max={200000}
                        style={{margin: '0 16px'}}
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
                <Typography.Title level={2}>Выберите срок</Typography.Title>
                <RangePicker disabledDate={disabledDate} />

            </Modal>
            {randomIndices.map((index, i) => (
                <div key={index} className={cls[`child${Math.floor(Math.random() * 6) + 1}`]}>
                    <Typography.Title style={{color: 'var(--gray)'}}>{childData[index].title}</Typography.Title>
                    <Button onClick={showModal} style={{backgroundColor: 'var(--gray)'}}>{childData[index].buttonText}</Button>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;
