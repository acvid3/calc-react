import React from 'react';
import {cl_ds} from './display.module.css'

const Display = ({result}) => {
    return (
        <div className={cl_ds}>
            {result}
        </div>
    )
}

export default Display;
