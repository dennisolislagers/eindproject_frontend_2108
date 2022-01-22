import React from 'react';
import './Counter.css'

function Counter ({htmlFor, title, register, name, counter, setCounter, onChange}) {
    return (
        <label htmlFor={htmlFor} >
            <h2>{title}</h2>
            <input
            type="text"
            {...register(name)}
            value={counter}
            onChange={onChange}/>
            <button
            type="button"
            disabled={counter === 0}
            onClick={() => setCounter (counter - 20)}
            >
                -
            </button>
            <button
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