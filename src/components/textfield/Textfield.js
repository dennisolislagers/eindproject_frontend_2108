import React from 'react';
import './Textfield.css'


function Textfield ( {id, title, type='text', errors, register, name, validationRules, value})
{
    return (
        <div className="textfield-container">
                <label htmlFor={id}><h2>{title}</h2></label>
                <input
                    type={type}
                    id={id}
                    {...register(name, validationRules)}
                    className={errors[name] && "error"}
                    value={value}
                    />
            <div>
            { errors[name] && <p className="error-message" >{errors[name].message} </p>}
            </div>
        </div>

                );
}

export default Textfield;