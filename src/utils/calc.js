import React, { useContext, useReducer } from "react";

const Calc = React.createContext();

export const useCalc = () => {
    return useContext(Calc);
}

const OPERATORS = { 
    '+': (a, b) => a + b, 
    '-': (a, b) => a - b, 
    '*': (a, b) => a * b, 
    '/': (a, b) => a / b
}

const calculate = (left, right, operator) => {

    const math = OPERATORS[operator];
    return math(left, right);
}

const parse = (expression) => {
    const keyOperator = (operator) => expression.includes(operator, 1);
    const currentOperator = Object.keys(OPERATORS).filter(keyOperator);
    const operands = expression.split(currentOperator);
    
    if (operands.length === 1) {
        const [right] = operands;
        return [0, parseFloat(right), currentOperator]
    }

    const [left, right] = operands;
    return [parseFloat(left), parseFloat(right), currentOperator];
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'calc': return {result: calculate(action.left, action.right, action.operator)};
        default: return state;
    }
}

export const CalcProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        result: 0
    });

    const calc = expression => {
        const [left, right, operator] = parse(expression);
        dispatch({ type: 'calc',  left, right, operator});
    }


    return (
        <Calc.Provider value={{
            result: state.result,
            calc
        }}>
            {children}
        </Calc.Provider>
    )
}

