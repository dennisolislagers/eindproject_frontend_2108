import React from 'react';
import './Radiobutton.css';

function Radiobutton ({ type="radio", id, name, value, onChange, register, htmlFor, label}) {
    return (
        <>
            <input
                type={type}
                id={id}
                {...register(name)}
                value={value}
                onChange={onChange}/>
            <label htmlFor={htmlFor}>{label}</label>
        </>
    );
};

export default Radiobutton;

