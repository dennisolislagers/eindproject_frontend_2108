import React from 'react';


function Inputfield ({errors, register, labelText, labelId, inputType = "text", inputName, validationRules})
{
    console.log(errors[inputName]);

    return (
        <>
                <label htmlFor={labelId} className={inputName}>
                    {labelText}
                </label>
                <input
                    type={inputType} id={labelId}
                    className={errors[inputName] && "error"}
                    {...register(inputName, validationRules)}/>
                    { errors[inputName] && <p className="error-message" >{errors[inputName].message} </p>}
        </>
                );
}

export default Inputfield;