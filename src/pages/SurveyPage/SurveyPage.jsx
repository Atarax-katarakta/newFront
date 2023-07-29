import React, { useState } from 'react';
import { Button, Form, Radio, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";

const { Item } = Form;

const SurveyPage = () => {
    const [stage, setStage] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showRecommendation, setShowRecommendation] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        setAnswers(values);
        setShowRecommendation(true);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const questions = [
        {
            label: "Мне больше подходит",
            answers: [
                "делать свою работу независимо от других людей",
                "работать в команде, в сотрудничестве с другими людьми",
                "управлять людьми, организовывать их работу",
            ]
        },
        {
            label: "Во время учебы в школе у меня в большей степени проявлялись способности из перечисленных:",
            answers: [
                "к рисованию, прикладному творчеству",
                "к точным наукам (информатика, математика, физика, химия)",
                "к музыке, пению или диджеингу (создание музыкальных сетов)",
                "к изучению языков, литературе, словесному творчеству"
            ]
        },
        {
            label: "Что из нижеперечисленного вас больше привлекает?",
            answers: [
                "Анализ данных и решение сложных проблем",
                "Творческая деятельность и разработка новых идей",
                "Работа с людьми и помощь другим",
                "Работа с технологиями и инновации"
            ]
        },
        {
            label: "Какие из следующих профессиональных характеристик вы считаете наиболее важными?",
            answers: [
                "Лидерство и способность принимать решения",
                "Креативность и умение мыслить нестандартно",
                "Организованность и умение планировать",
                "Сильные аналитические и критические навыки"
            ]
        },
        {
            label: "В какой из данных сфер профессиональной деятельности вы видите себя?",
            answers: [
                "Искусство, дизайн и креативные индустрии",
                "Наука, исследования и разработки",
                "Медицина, здравоохранение и социальная работа",
                "Информационные технологии и программирование",
                "Бизнес, управление и маркетинг"
            ]
        },
        {
            label: "Какие из следующих профессий кажутся вам наиболее интересными?",
            answers: [
                "Графический дизайнер или художник",
                "Инженер или программист",
                "Музыкант или диджей",
                "Учитель или литературный критик",
                "Менеджер или предприниматель"
            ]
        },
        {
            label: "Какое из следующих высказываний о работе соответствует вашим предпочтениям?",
            answers: [
                "Работа должна быть стабильной и предсказуемой",
                "Работа должна предоставлять свободу и творчество",
                "Работа должна предлагать новые вызовы и задачи",
                "Работа должна помогать другим и приносить пользу обществу"
            ]
        },
        {
            label: "Какой из следующих видов образования вам кажется наиболее привлекательным?",
            answers: [
                "Техническое или инженерное образование",
                "Творческое или искусствоведческое образование",
                "Медицинское или социальное образование",
                "Экономическое или управленческое образование",
                "Гуманитарное или филологическое образование"
            ]
        },
        {
            label: "Какую роль вы чаще всего выполняете в коллективе?",
            answers: [
                "Лидер, организатор или инициатор",
                "Аналитик, исследователь или эксперт",
                "Творческий вдохновитель или идеалист",
                "Коммуникатор или медиатор"
            ]
        },
        {
            label: "Какие дополнительные навыки или знания вы готовы освоить для достижения успеха в выбранной профессии?",
            answers: [
                "Улучшение коммуникационных навыков",
                "Изучение новых технологий и программирование",
                "Развитие творческого мышления и дизайна",
                "Овладение знаниями в социальных и гуманитарных науках"
            ]
        }
    ];


    const handleNext = () => {
        setStage((prevStage) => prevStage + 1);
    };

    const handlePrevious = () => {
        setStage((prevStage) => prevStage - 1);
    };

    // Функция для вычисления рекомендуемой специальности на основе ответов
    const calculateRecommendation = () => {
        // Ваша логика вычисления рекомендации на основе ответов
        // Ниже приведен пример простой логики для демонстрации
        // Можете заменить ее на вашу специфичную логику
        const answerCounts = {
            type1: 0,
            type2: 0,
            type3: 0,
            type4: 0,
        };

        Object.values(answers).forEach((answer) => {
            if (
                answer === "делать свою работу независимо от других людей" ||
                answer === "к рисованию, прикладному творчеству"
            ) {
                answerCounts.type1++;
            } else if (
                answer === "работать в команде, в сотрудничестве с другими людьми" ||
                answer === "к точным наукам (информатика, математика, физика, химия)"
            ) {
                answerCounts.type2++;
            } else if (
                answer === "управлять людьми, организовывать их работу" ||
                answer === "к музыке, пению или диджеингу (создание музыкальных сетов)"
            ) {
                answerCounts.type3++;
            } else if (answer === "к изучению языков, литературе, словесному творчеству") {
                answerCounts.type4++;
            }
        });

        const recommendedType = Object.keys(answerCounts).reduce((a, b) =>
            answerCounts[a] > answerCounts[b] ? a : b
        );

        const recommendations = {
            type1: (<div><Typography.Title level={2}>Рекомендуемая специальность:</Typography.Title>  <Typography.Title level={3}>Графический дизайнер или художник</Typography.Title></div>),
            type2: (<div><Typography.Title level={2}>Рекомендуемая специальность:</Typography.Title>  <Typography.Title level={3}>Инженер или программист</Typography.Title></div>),
            type3: (<div><Typography.Title level={2}>Рекомендуемая специальность:</Typography.Title>  <Typography.Title level={3}>Музыкант или диджей</Typography.Title></div>),
            type4: (<div><Typography.Title level={2}>Рекомендуемая специальность:</Typography.Title>  <Typography.Title level={3}>Учитель или литературный критик</Typography.Title></div>),
        };

        return recommendations[recommendedType];
    };

    return (
        <div>
            <Form
                className="form"
                name="basic"
                style={{
                    maxWidth: 800,
                    margin: "100px auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {showRecommendation ? (
                    <div>
                        <p>{calculateRecommendation()}</p>
                    </div>
                ) :
                    questions.map((item, i) => {
                        if (i === stage) {
                            return (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    <Typography.Title level={2}>{item.label}</Typography.Title>
                                    <Radio.Group
                                        style={{ display: "flex", flexDirection: "column", gap: 10 }}
                                        name={`question${i}`}
                                    >
                                        {item.answers.map((answer, j) => (
                                            <Radio style={{ fontSize: 20 }} key={j} value={answer}>
                                                {answer}
                                            </Radio>
                                        ))}
                                    </Radio.Group>
                                    <ButtonGroup>
                                        {stage > 0 && <Button onClick={handlePrevious}>Назад</Button>}
                                        {stage < questions.length - 1 ? (
                                            <Button type="primary" onClick={handleNext}>
                                                Далее
                                            </Button>
                                        ) : (
                                            <Button type="primary" htmlType="submit">
                                                Завершить
                                            </Button>
                                        )}
                                    </ButtonGroup>
                                </div>
                            );
                        }
                        return null; // Возвращаем null для вопросов, не относящихся к текущему этапу
                    })}
            </Form>
            {/* Вывод рекомендации после завершения опроса */}

        </div>
    );
};

export default SurveyPage;



