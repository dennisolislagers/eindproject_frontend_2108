import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
// import Radiobutton from "../radiobutton/Radiobutton";
import Button from "../button/Button";
import './QueryForm.css';
import Dropbox from "../dropbox/Dropbox";
import { ShowResultContext} from "../../context/ShowResultContext";
import {AuthenticatedContext} from "../../context/AuthenticatedContext"
import Counter from "../counter/Counter";
import Radiobutton from "../radiobutton/Radiobutton";


const apiKey = '77cbcf9f1fa3d4f3c17a7c2f9abe2e8a'
const apiId = '3fe16d27'

function QueryForm ({setQueryHandler}) {
    const { register, handleSubmit } = useForm();
    const [menuChoice, toggleMenuChoice] = useState ('');
    const [dietChoice, setDietChoice] = useState('');
    const [healthChoice, setHealthChoice] = useState('');
    const [cuisineChoice, setCuisineChoice] = useState('');
    const [minCalorie, setMinCalorie] = useState (100);
    const [maxCalorie, setMaxCalorie]= useState (1000);
    const { result } = useContext( ShowResultContext );
    const { user } = useContext(AuthenticatedContext)
    const total = `${menuChoice}, ${dietChoice}, ${healthChoice}, ${cuisineChoice}`
    const query = `https://api.edamam.com/api/recipes/v2?type=public&q=${total}&app_id=${apiId}&app_key=${apiKey}&calories=${minCalorie}-${maxCalorie}`


    function submitButton(data){
        setQueryHandler (query);
        handleSubmit(submitButton)
        console.log(data)
        result()
    }
    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(submitButton)}>
                <fieldset>
                    <legend>KEUZEMENU</legend>
                    <h1>Hallo {user.username} Waar wil je een gerecht voor hebben?</h1>
                    <label htmlFor="details-menuchoice" className="radiobutton-container">
                        <Radiobutton
                            register={register}
                            name="mealType"
                            id="details-breakfast"
                            value="breakfast"
                            onChange={(e) => toggleMenuChoice(e.target.value)}
                            item= "ONTBIJT"
                        />
                        <Radiobutton
                            register={register}
                            name="mealType"
                            id="details-lunch"
                            value="lunch"
                            onChange={(e) => toggleMenuChoice(e.target.value)}
                            item="LUNCH"
                        />
                        <Radiobutton
                            register={register}
                            name="mealType"
                            id="details-diner"
                            value="dinner"
                            onChange={(e) => toggleMenuChoice(e.target.value)}
                            item="AVONDETEN"
                        />
                        <Radiobutton
                            className="snack-item"
                            register={register}
                            name="mealType"
                            id="details-snack"
                            value="snack"
                            onChange={(e) => toggleMenuChoice(e.target.value)}
                            item="SNACK"
                        />
                    </label>

                <Dropbox
                    onSubmit={handleSubmit(submitButton)}
                    htmlFor="details-dietdropbox"
                    header="Speciale Dieetwensen:  "
                    register={register}
                    name="dietLabels"
                    id="diet"
                    choice={dietChoice}
                    onChange={(e) => setDietChoice(e.target.value)}
                    value1=" "              title1="Geen"
                    value2="high-fiber"     title2="Vezelrijk"
                    value3="high-protein"   title3="Eiwitrijk"
                    value4="low-carb"       title4="Koolhydraatarm"
                    value5="low-fat"        title5="Vetarm"
                    value6="low-sodium"     title6="Zoutarm"
                />
                <Dropbox
                    onSubmit={handleSubmit(submitButton)}
                    htmlFor="details-healthdropbox"
                    header="Heb je Allergieën?"
                    register={register}
                    name="healthLabels"
                    id="health"
                    choice={healthChoice}
                    onChange={(e) => setHealthChoice(e.target.value)}
                    value1=" "              title1="Geen"
                    value2="diary-free"     title2="Melk"
                    value3="gluten-free"    title3="Gluten"
                    value4="peanut-free"    title4="Pinda's"
                    value5="egg-free"       title5="Eieren"
                    value6="selery-free"    title6="selderievrij"

                />
                <Dropbox
                    onSubmit={handleSubmit(submitButton)}
                    htmlFor="details-cuisinedropbox"
                    header="Voorkeur voor een keuken?"
                    register={register}
                    name="cuisineLabels"
                    id="cuisine"
                    choice={cuisineChoice}
                    onChange={(e) => setCuisineChoice(e.target.value)}
                    value1=" "              title1="Geen Voorkeur"
                    value2="chinese"     title2="Chinees"
                    value3="italian"   title3="Italiaans"
                    value4="maxican"       title4="Mexicaans"
                    value5="japanese"        title5="Japans"
                    value6="kosher"     title6="Koosjer"
                />
                    <Counter
                        onSubmit={handleSubmit(submitButton)}
                        onChange={(e) => setMinCalorie(e.target.value)}
                        register={register}
                        name="min calories"
                        value={minCalorie}
                        title="minimaal aantal calorieën"
                        counter={minCalorie}
                        setCounter={setMinCalorie}
                        />
                    <Counter
                        onSubmit={handleSubmit(submitButton)}
                        onChange={(e) => setMaxCalorie(e.target.value)}
                        register={register}
                        name="max calories"
                        value={maxCalorie}
                        title="maximaal aantal calorieën"
                        counter={maxCalorie}
                        setCounter={setMaxCalorie}
                        />
                <div>
                <Button
                    type="submit"
                    title="Naar de gerechten"
                />
                </div>
                </fieldset>
            </form>
        </div>
    );
};

export default QueryForm;