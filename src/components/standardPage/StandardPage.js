import React from 'react';

function StandardPage ({image, title}) {
    return (
        <div className="standard-page-container">
            <img src={image} alt={title}/>
            <h1>{title}</h1>
        </div>
    );
};

export default StandardPage;