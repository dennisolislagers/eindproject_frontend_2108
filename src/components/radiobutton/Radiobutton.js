import React from 'react';
import './Radiobutton.css';

function Radiobutton ({ className="radiobutton-item", type="radio", name, id, value, isChecked, onChange, register, item}) {
    return (
            <>
            <div className={className}>
                <input
                {...register(name)}
                checked={isChecked}
                type={type}
                id={id}
                value={value}
                onChange={onChange}/>
            </div>
            {item}
            </>
    );
};

export default Radiobutton;


