import React from 'react';
import './Counter.css'

function Counter ({htmlFor, title, counter, setCounter, className="counter-container"}) {
    return (
        <div className={className}>
        <label htmlFor={htmlFor}
        >
            <h3>{title}</h3>
            <input
            type="text"
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
</div>
    );
};

export default Counter;




//