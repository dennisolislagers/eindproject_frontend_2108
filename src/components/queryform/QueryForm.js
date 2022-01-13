import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Radiobutton from "../radiobutton/Radiobutton";
import Button from "../button/Button";
import './QueryForm.css';


function QueryForm ({setQueryHandler}) {
    const { register, handleSubmit } = useForm()
    const [menuChoice, toggleMenuChoice] = useState ('');
    const [dietChoice, setDietChoice] = useState('')


    function submitButton(data){
        setQueryHandler(menuChoice, dietChoice);
        handleSubmit(submitButton)
        console.log(data)
    }
    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(submitButton)}>
                <h1>Waar wil je een gerecht voor hebben?</h1>
                <label htmlFor="details-menuchoice">
                    <Radiobutton
                        register={register}
                        id="breakfast"
                        name="mealType"
                        value="breakfast"
                        label="ontbijt"
                        onChange={(e) => toggleMenuChoice(e.target.value)}/>
                    <Radiobutton
                        register={register}
                        id="lunch"
                        name="mealType"
                        value="lunch"
                        label="lunch"
                        onChange={(e) => toggleMenuChoice(e.target.value)}/>
                    <Radiobutton
                        register={register}
                        id="diner"
                        name="mealType"
                        value="dinner"
                        label="avondeten"
                        onChange={(e) => toggleMenuChoice(e.target.value)}/>
                </label>
                <div className="selectbox-menu">
                    <form onSubmit={handleSubmit(submitButton)}>
                        <label htmlFor="details-dietdropbox">
                            <h2>Speciale Dieetwensen:  </h2>
                            <select {...register("dietLabels")} id="diet" value={dietChoice}
                                    onChange={(e) => setDietChoice(e.target.value)}>
                                <option value="balanced">Gebalanceerd</option>
                                <option value="high-fiber">Vezelrijk</option>
                                <option value="high-protein">Eiwitrijk</option>
                                <option value="low-carb">Koolhydraatarm</option>
                                <option value="low-fat">Vetarm</option>
                                <option value="low-sodium">Zoutarm</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div>
                <Button
                    type="submit"
                />
                </div>
            </form>
        </div>
    );
};

export default QueryForm;