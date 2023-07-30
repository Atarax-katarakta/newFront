import React, {useState} from 'react';
import {Button, DatePicker, Input, Radio, Select} from 'antd';
import cl from './creditForm.module.css'

const CreditForm = () => {
    const [value, setValue] = useState(1);
    const [value1, setValue1] = useState(1)
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChange1 = (e) => {
        setValue(e.target.value);
    };
    const onChange2 = (e) =>{
        setValue1(e.target.value)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={cl.credit_form}>
            <div className={cl.title}>Роль в предполагаемой сделке</div>
            <Radio.Group onChange={onChange1} value={value}>
                <Radio value={1}>Я заемщик</Radio>
                <Radio value={2}>Я созаемщик</Radio>
                <Radio value={3}>Я поручитель</Radio>
            </Radio.Group>
            <span style={{margin: '0.5rem 0'}}>Я законный предстваитель Заемщика</span>
            <Radio.Group onChange={onChange2} value={value1}>
                <Radio value={1}>Родитель</Radio>
                <Radio value={2}>Усыновительь</Radio>
            </Radio.Group>
            <span>Если вы явлетесь Созаемщиком/Поручителем/Законным представителем заемщика, укажите Ф.И.О. Заемщика/Основного созаемщика</span>
            <Input placeholder="Фамилия" />
            <Input placeholder="Имя" />
            <Input placeholder="Отчество" />
            <div className={cl.title}>Персональные данные</div>
            <Input placeholder="Фамилия" />
            <Input placeholder="Имя" />
            <Input placeholder="Отчество" />
            <span>Дата рождения</span>
            <DatePicker onChange={onChange} />
            <Input placeholder="Место рождения (заполните в соответствии с паспортом)" />
            <Input placeholder="ИНН" />
            <Select
                placeholder={"Пол"}
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'Ж',
                        label: 'Ж',
                    },
                    {
                        value: 'М',
                        label: 'М',
                    },

                ]}
            />
            <Button type='default'>Отправить</Button>
        </div>
    );
};

export default CreditForm;