import React from 'react';
import './Textfield.css'


function Textfield ( {id, title, type, errors, register, name, validationRules, value, onChange})
{
    return (
        <>
                <label htmlFor={id}>{title}</label>
                <input
                    type={type}
                    id={id}
                    {...register(name, validationRules)}
                    className={errors[name] && "error"}
                    value={value}
                    onChange ={onChange}
                    />
                    { errors[name] && <p className="error-message" >{errors[name].message} </p>}
        </>
                );
}

export default Textfield;