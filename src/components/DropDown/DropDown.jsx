import React, {useState} from 'react';
import cl from './DropDown.module.scss'
import arrow from './arrow-down.svg'
const DropDown = ({title, description}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={cl.dropdown}>
            <div className={cl.title} onClick={()=>setOpen(!open)}>
                <span>{title}</span>
                <img src={arrow} alt='' style={open? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}/>
            </div>
            <div className={cl.description} style={open? {display: 'block'} : {display: 'none'}}>
                {description}
            </div>
        </div>
    );
};

export default DropDown;