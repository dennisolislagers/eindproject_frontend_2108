import React from 'react';

function Button ({message, enabled, name, image}) {
    return (
        <button
            disabled={{enabled}}
            type="button"
            onClick={() => console.log({message})}>
            {name}
            background-image={image}
        </button>
    )
}

export default Button;