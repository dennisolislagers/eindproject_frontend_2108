import React from 'react';
import './Counter.css'

function Counter ({title, register, name, value, counter, setCounter, onChange, onSubmit}) {
    return (
        <article {...register(name)} onChange={onChange} onSubmit={onSubmit}>
            <h2>{title} = {counter}</h2>

            <button id="counter-button"
            value={value}
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
        </article>
    );
};

export default Counter;




