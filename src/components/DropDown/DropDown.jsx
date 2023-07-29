// import React, {useState} from 'react';
// import cl from './DropDown.module.scss';
// import arrow from './arrow-down.svg';
// import {Button, Drawer, Space, Tag, Typography} from 'antd';
//
// const DropDown = ({title, description}) => {
//     const [open, setOpen] = useState(false);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//
//     const showDrawer = (course) => {
//         setSelectedCourse(course);
//     };
//
//     const onClose = () => {
//         setSelectedCourse(null);
//     };
//
//     return (
//         <div className={cl.dropdown}>
//             <div className={cl.title} onClick={() => setOpen(!open)}>
//                 <span>{title}</span>
//                 <img
//                     src={arrow}
//                     alt=""
//                     style={open ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
//                 />
//             </div>
//             <div className={cl.description} style={open ? {display: 'flex'} : {display: 'none'}}>
//                 {description.map((item) => (
//                     <div className={cl.course} key={item.code}>
//                         {item.name} {item.code}
//                         <Button onClick={() => showDrawer(item)} size="small">
//                             Подробнее
//                         </Button>
//                     </div>
//                 ))}
//             </div>
//             <Drawer
//                 bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 40}}
//                 title={selectedCourse ? selectedCourse.name : ''}
//                 placement="left"
//                 onClose={onClose}
//                 visible={selectedCourse !== null}
//             >
//                 {selectedCourse && (
//                     <div className={cl.drawer}>
//                         <Typography.Text>Код направления: {selectedCourse.code}</Typography.Text>
//                         <Typography.Text>Минимальный балл для бюджета: {selectedCourse.minScoreBudget}</Typography.Text>
//                         <Typography.Text>Минимальный балл для
//                             коммерции: {selectedCourse.minScoreCommerce}</Typography.Text>
//                         <Typography.Text>Стоимость обучения: {selectedCourse.tuitionFee.commerce}</Typography.Text>
//                         <Typography.Text>
//                             Необходимые предметы:
//                             <br/>
//                             {selectedCourse.requiredExams.map(item => (<Tag color="blue">{item}</Tag>))}
//                         </Typography.Text>
//                         <Typography.Text>Количество бюджетных мест: {selectedCourse.budgetSeats}</Typography.Text>
//                         <Typography.Text>Количество платных мест: {selectedCourse.paidSeats}</Typography.Text>
//                     </div>
//                 )}
//                 <Button>Перейти к анкете</Button>
//             </Drawer>
//         </div>
//     );
// };
//
// export default DropDown;
