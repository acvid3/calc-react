import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import {Buttons} from '../../data/data';
import {useCalc} from '../../utils/calc';
import {pg} from './parentGroup.module.css';

const ParentGroup = () => {
    const {calc, result} = useCalc();
    const [expression, setExpression] = useState('0');
    
    useEffect(() => {
        setExpression(result.toString());
    }, [result])

    const updateExpression = (symbol) => {
        const operators = '+-*/';
        const operator = [...operators].filter(exp => exp === symbol).pop();

        if (expression === '0') {
            return symbol;
        }

        if (symbol === '=') {
            if (expression.split(operator).length >= 2) {
                return expression;
            }
        }
        
        return expression + symbol;
    }

    const clear = e => {
        if (e === 'c') {
            setExpression('0');
        }
    }

    const equals = e => {
        if (e === '=') {
            calc(expression);
        }
    }

    const onClick = symbol => {
        setExpression(updateExpression(symbol));

        equals(symbol);
        clear(symbol);
    }

    return (
        <div>
            <Display result={expression} />
            <div className={pg}>
                {
                    Buttons.map(button => {
                        
                        return <Button 
                            key={button.id} 
                            symbol={button.symbol}
                            style={button.style}
                            onClick={onClick}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default ParentGroup;