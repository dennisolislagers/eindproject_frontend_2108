import React from 'react';
import './Radiobutton.css';

function Radiobutton ({ className="radiobutton-item", type="radio", name, id, value, register, item}) {
    return (
            <div id={className}>
            <label htmlFor={id}>
                <input
                {...register(name)}
                type={type}
                id={id}
                value={value}/>
            </label>
            <h3>{item}</h3>
            </div>
    );
};

export default Radiobutton;


