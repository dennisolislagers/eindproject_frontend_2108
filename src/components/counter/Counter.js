import React from 'react';
import './Counter.css'

function Counter ({htmlFor, title, register, name, counter, setCounter, onChange,}) {
    return (
        <label htmlFor={htmlFor}>
            <p>{title}</p>
            <input
            onChange={onChange}
            type="text"
            {...register(name)}
            value={counter}/>
            <button id="counter-button"
            type="button"
            disabled={counter === 0}
            onClick={() => setCounter (counter - 20)}
            >
                -
            </button>
            <button id="counter-button"
            type="button"
            disabled={counter === 0}
            onClick={() => setCounter (counter + 20)}
            >
                +
            </button>
        </label>
    );
};

export default Counter;




//