import React from 'react';
import'./Dropbox.css';

function Dropbox ({className="selectbox-menu", htmlFor, header, register, name, id, value1, title1, value2, title2,value3, title3,value4, title4,value5, title5, value6, title6}) {
    return (
                <div className={className}>
                        <label htmlFor={htmlFor}><h3>{header}</h3></label>
                            <select {...register(name)} id={id}>
                                <option value={value1}>{title1}</option>
                                <option value={value2}>{title2}</option>
                                <option value={value3}>{title3}</option>
                                <option value={value4}>{title4}</option>
                                <option value={value5}>{title5}</option>
                                <option value={value6}>{title6}</option>
                            </select>
                </div>
    );
};

export default Dropbox;