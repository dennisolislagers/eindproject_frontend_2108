import React from 'react';
import './Button.css'

function Button ({ type="button", name, onClick, title, onSubmit}) {
    return (
        <label>
            {title}
            <input
                type={type}
                name={name}
                onClick={onClick}
            />
        </label>
    )
}

export default Button;