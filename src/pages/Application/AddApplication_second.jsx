import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './style.css';
import {InputNumber, Slider} from "antd";

const AddApplicationSecond = () => {
    const params = useParams();
    console.log(params)
    //{cityid:
    // "1"
    // regionid
    // :
    // "1"
    // specialtyid
    // :
    // "1"
    const [sumValue, setSumValue] = useState(1);
    const [termValue, setTermValue] = useState(1);

    const onChangeSum = (newValue) => {
        setSumValue(newValue);
    };
    const onChangeTerm = (newValue)=>{
        setTermValue(newValue)
    }
    return (
        <div className='credit_calculate'>
            <div className='h1'>Кредитный калькулятор</div>
            <div className='subtitle'>Калькулятор кредита позволяет рассчитать и сравнить предложения по размеру ежемесячного платежа, сумме переплаты и процентной ставке.</div>
            <div className='calculate'>
                <div className='sum'>
                    <div className='label'>Сумма кредита</div>
                    <InputNumber
                        min={1}
                        max={5000000}
                        style={{border: 'none'}}
                        value={sumValue}
                        onChange={onChangeSum}
                    />
                    <Slider
                        min={1}
                        max={5000000}
                        onChange={onChangeSum}
                        value={typeof sumValue === 'number' ? sumValue : 0}
                        trackStyle={{backgroundColor: '#ACFF35'}}
                        trackBg ='#ACFF35'
                    />

                </div>
                <div className='term'>
                    <div className='label'>Срок погашения</div>
                    <InputNumber
                        min={1}
                        max={360}
                        style={{border: 'none'}}
                        value={termValue}
                        onChange={onChangeTerm}
                    />
                    <Slider
                        min={1}
                        max={360}
                        trackStyle={{backgroundColor: '#ACFF35'}}
                        onChange={onChangeTerm}
                        value={typeof termValue === 'number' ? termValue : 0}
                    />

                </div>
            </div>
        </div>
    );
};

export default AddApplicationSecond;