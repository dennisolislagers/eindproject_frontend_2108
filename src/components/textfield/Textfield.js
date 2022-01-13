import React from 'react';
import './Textfield.css'


function Textfield ({className="textfield-container", errors, register, labelText, labelId, inputType = "text", inputName, validationRules})
{

    return (
        <div className={className}>
                <label htmlFor={labelId} className={inputName}>
                    {labelText}
                </label>
                <input
                    type={inputType} id={labelId}
                    className={errors[inputName] && "error"}
                    {...register(inputName, validationRules)}/>
                    { errors[inputName] && <p className="error-message" >{errors[inputName].message} </p>}
        </div>
                );
}

export default Textfield;