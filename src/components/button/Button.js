import React from 'react';
import './Button.css'

function Button ({ className="button-item", type="button", disabled, name, onClick, title}) {
    return (

        <div className={className}>
        <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        name={name}>
            {title}
        </button>
        </div>
)
}

export default Button;