import React, { useState } from 'react';
import './App.css';

const initialCounters = [
    {
        id: 123,
        value: 10
    },
    {
        id: 1345,
        value: 110
    },
    {
        id: '12235',
        value: -80
    },
]

function App() {

    const [counts, setCounts] = useState(initialCounters);
    const [number1, setNumber1] = useState(10)
    const [number2, setNumber2] = useState(10)
    const [result, setResult] = useState(0);
    const [operand, setOperand] = useState('+')

    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {...el, value: el.value - 1}
            : el);
        setCounts(updatedCounts)
    }
    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {...el, value: el.value + 1}
            : el);
        setCounts(updatedCounts)
    }

    const addCounter = () => {
        const newCount = {
            id: Math.random(),
            value: 0
        };

        setCounts([...counts, newCount]);
    }

    const deleteCounter = (id) => {
        const updatedCounts = counts.filter(el => el.id !== id);
        setCounts(updatedCounts);
    }

    const changeNumber1 = (event) => {
        let value = 0;
        if(!isNaN(event.target.value)) value = +event.target.value;
        else value = 0;
        setNumber1(value);
        changeNumberOrOperand(value, number2, operand);
    }

    const changeNumber2 = (event) => {
        let value = 0;
        if(!isNaN(event.target.value)) value = +event.target.value;
        else value = 0;
        setNumber2(value);
        changeNumberOrOperand(number1, value, operand);
    }

    const changeOperand = (e) => {
        const operand = e.target.value;
        changeNumberOrOperand(number1, number2, operand);
        setOperand(operand);
    }

    const changeNumberOrOperand = (n1, n2, oprnd) => {
        if(oprnd === '+') setResult(n1 + n2);
        if(oprnd === '-') setResult(n1 - n2);
        if(oprnd === '*') setResult(n1 * n2);
        if(oprnd === '/') setResult(n1 / n2);
    }

    return (
        <div>
            <ul className="list">
                {counts.map(el => (
                    <li id={el.id}>
                        <button onClick={() => minus(el.id)}>Minus</button>
                        <span className="list--value">{el.value}</span>
                        <button className="list--plusButton" onClick={() => plus(el.id)}>Plus</button>
                        <button onClick={() => deleteCounter(el.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <hr/>

            <button onClick={addCounter}>Add Counter</button>

            <hr/>

            <select value={operand} onChange={changeOperand}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input value={number1} onChange={changeNumber1}/>
            <input value={number2} onChange={changeNumber2}/>

            <h2>{number1} {operand} {number2} = {result}</h2>
        </div>
    );
}

export default App;