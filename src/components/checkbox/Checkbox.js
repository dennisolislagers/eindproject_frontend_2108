import React from 'react';
import './Checkbox.css'

function Checkbox ({id, type="checkbox", name, value, register, title}) {
    return (
        <div className="checkbox-container">
        <label htmlFor={id} >
            <input
                type={type}
                name={name}
                value={value}
                {...register(name)}
            />
        </label>
            <h2>{title}</h2>
        </div>
    );
};

export default Checkbox;