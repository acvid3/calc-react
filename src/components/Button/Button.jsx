import React from 'react';
import {cl_btn} from './button.module.css'

const Button = ({symbol, style, onClick}) => {
    return (
        <button 
            className={cl_btn} 
            style={style}
            onClick={() => onClick(symbol)}
        >
            {symbol}
        </button>
    )
}

export default Button;
