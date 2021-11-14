import React, { useState } from 'react';
import {cl_ds} from './display.module.css'

const Display = ({word}) => {
    const [message, setMessage] = useState('');

    
    return (
        <div className={cl_ds}>
            {word}
        </div>
    )
}

export default Display;
