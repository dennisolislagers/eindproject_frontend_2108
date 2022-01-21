import React from 'react';
import './Radiobutton.css';

function Radiobutton ({ className="radiobutton-item", type="radio", name, id, value, isChecked, onChange, register, item}) {
    return (
            <>
            <label htmlFor={id} className={className}>
                <input
                {...register(name)}
                type={type}
                id={id}
                value={value}
                checked={isChecked}
                onChange={onChange}/>
            </label>
            {item}
            </>
    );
};

export default Radiobutton;


