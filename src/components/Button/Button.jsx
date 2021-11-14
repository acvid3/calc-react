import React from 'react';
import {cl_btn} from './button.module.css'

const Button = ({label, style, onClick}) => {
    return (
        <button 
            className={cl_btn} 
            style={style}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    )
}

export default Button;
