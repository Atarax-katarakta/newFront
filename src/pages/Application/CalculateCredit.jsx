import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './aplicationUniver/style.css';
import {Button, InputNumber, Slider, Spin} from "antd";
import {banks} from "./aplicationUniver/data";

const AddApplicationSecond = () => {
    const params = useParams();
    console.log(params)
    const [sumValue, setSumValue] = useState(1000);
    const [termValue, setTermValue] = useState(1);
    const [openDescr, setOpenDescr] = useState([false, false])
    const [isOpen, setIsOpen] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const onChangeSum = (newValue) => {
        setSumValue(newValue);
    };
    const onChangeTerm = (newValue) => {
        setTermValue(newValue)
    }
    return (
        <div className='credit_calculate'>
            <div className='h1'>Кредитный калькулятор</div>
            <div className='subtitle'>Калькулятор кредита позволяет рассчитать и сравнить предложения по размеру
                ежемесячного платежа, сумме переплаты и процентной ставке.
            </div>
            <div className='calculate'>
                <div className='sum'>
                    <div className='label'>Сумма кредита</div>
                    <InputNumber
                        min={1000}
                        max={5000000}
                        style={{border: 'none'}}
                        value={sumValue}
                        onChange={onChangeSum}
                    />
                    <Slider
                        step={1000}
                        min={1000}
                        max={5000000}
                        onChange={onChangeSum}
                        value={typeof sumValue === 'number' ? sumValue : 0}
                        trackStyle={{backgroundColor: '#ACFF35'}}
                        trackBg='#ACFF35'
                    />

                </div>
                <div className='term'>
                    <div className='label'>Срок погашения</div>
                    <InputNumber
                        min={1}
                        max={120}
                        style={{border: 'none'}}
                        value={termValue}
                        onChange={onChangeTerm}
                    />
                    <Slider
                        min={1}
                        max={120}
                        trackStyle={{backgroundColor: '#ACFF35'}}
                        onChange={onChangeTerm}
                        value={typeof termValue === 'number' ? termValue : 0}
                    />

                </div>
                <Button onClick={() => {
                    setIsOpen(true)
                    setTimeout(() => {
                        setIsDone(true)
                        setIsOpen(false)
                    }, 3000)
                }}>
                    Отправить заявку
                </Button>
            </div>
            {isOpen && <div style={{display: "flex", justifyContent: "center", padding: 100}}><Spin size={"large"}/></div>}
            {isDone &&
                <div className='banks'>
                    {
                        banks.map((el, i) =>
                            <div className='bank'>
                                <div className='title'>
                                    <img src={el.logo} alt='' className='logo'/>
                                    <div className='title_block'>
                                        <div className='title'>{el.stavka}</div>
                                        <div className='subtitle'>ставка от</div>
                                    </div>
                                    <div className='title_block'>
                                        <div className='title'>{el.limit}</div>
                                        <div className='subtitle'>{el.oplata}</div>
                                    </div>
                                    <div className='props'>
                                        {el['conditions'].map((el) =>
                                            <div className='prop'>
                                                {el}
                                            </div>
                                        )}
                                    </div>
                                    <div className='btns'>
                                    <span className='success'>
                                        Одобрено
                                    </span>
                                        <span onClick={() => {
                                            const newState = openDescr.slice();
                                            newState[i] = !openDescr[i];
                                            setOpenDescr(newState)
                                        }} className='clicker'>Подробные условия</span>
                                    </div>

                                </div>
                                <div className='description' style={openDescr[i] ? {display: 'block'} : {display: 'none'}}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <th>Процентная ставка</th>
                                            <td>{el.options.percent}</td>
                                        </tr>
                                        <tr>
                                            <th>Возможная сумма кредита</th>
                                            <td>{el.options.possibleAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Срок погашения кредита</th>
                                            <td>{el.options.repaymentPeriod}</td>
                                        </tr>
                                        <tr>
                                            <th>Цель кредита</th>
                                            <td>{el.options.goal}</td>
                                        </tr>
                                        <tr>
                                            <th>Форма выдачи</th>
                                            <td>{el.options.formsDoc}</td>
                                        </tr>
                                        <tr>
                                            <th>Срок рассмотрения заявки</th>
                                            <td>{el.options.reviewPeriod}</td>
                                        </tr>
                                        <tr>
                                            <th>Порядок оформления кредита</th>
                                            <td>{el.options.orderRegistration}</td>
                                        </tr>
                                        <tr>
                                            <th>Подтверждение дохода</th>
                                            <td>{el.options.proofIncome}</td>
                                        </tr>
                                        <tr>
                                            <th>Обеспечение</th>
                                            <td>{el.options.provision}</td>
                                        </tr>
                                        <tr>
                                            <th>Возраст заемщика</th>
                                            <td>{el.options.ageClient}</td>
                                        </tr>
                                        <tr>
                                            <th>Регистрация</th>
                                            <td>{el.options.registration}</td>
                                        </tr>
                                        <tr>
                                            <th>Стаж работы</th>
                                            <td>{el.options.workExperience}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default AddApplicationSecond;