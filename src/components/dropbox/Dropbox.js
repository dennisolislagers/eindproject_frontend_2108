import React from 'react';
import'./Dropbox.css';

function Dropbox ({className="selectbox-menu", onSubmit, htmlFor, header, register, name, id, choice, onChange, value1, title1, value2, title2,value3, title3,value4, title4,value5, title5, value6, title6}) {
    return (
            <>
                <div className={className}>
                    <form onSubmit={onSubmit}>
                        <label htmlFor={htmlFor}>{header}</label>
                            <select {...register(name)} id={id} value={choice} onChange={onChange}>
                                <option value={value1}>{title1}</option>
                                <option value={value2}>{title2}</option>
                                <option value={value3}>{title3}</option>
                                <option value={value4}>{title4}</option>
                                <option value={value5}>{title5}</option>
                                <option value={value6}>{title6}</option>
                            </select>
                    </form>
                </div>
            </>
    );
};

export default Dropbox;