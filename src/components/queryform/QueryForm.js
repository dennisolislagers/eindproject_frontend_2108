import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import './QueryForm.css';
import Dropbox from "../dropbox/Dropbox";
import { ShowResultContext} from "../../context/ShowResultContext";
import {AuthenticatedContext} from "../../context/AuthenticatedContext"
import Counter from "../counter/Counter";
import Radiobutton from "../radiobutton/Radiobutton";

function QueryForm ({setQueryHandler}) {
    const { register, handleSubmit } = useForm();
    const [menuChoice, toggleMenuChoice] = useState ('breakfast');
    const [dietChoice, setDietChoice] = useState('');
    const [healthChoice, setHealthChoice] = useState('');
    const [cuisineChoice, setCuisineChoice] = useState('');
    const [minCalorie, setMinCalorie] = useState (100);
    const [maxCalorie, setMaxCalorie]= useState (1000);
    const { result } = useContext( ShowResultContext );
    const { user } = useContext(AuthenticatedContext)

    const query = `https://api.edamam.com/api/recipes/v2?type=public&q=${menuChoice}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=${dietChoice}&health=${healthChoice}&cuisineType=${cuisineChoice}&calories=${minCalorie}-${maxCalorie}`


    function submitButton(data){
        setQueryHandler (query);
        handleSubmit(submitButton)
        console.log(data)
        console.log(minCalorie)
        console.log(maxCalorie)
        result()
    }
    return (
        <div className="page-container">
            <form onSubmit={handleSubmit(submitButton)}>
                <fieldset>
                    <legend>KEUZEMENU</legend>
                    <h1>Hallo {user.id}, Waar wil je een gerecht voor hebben?</h1>
                    <label htmlFor="details-menuchoice" className="radiobutton-container">
                        <Radiobutton
                            register={register}
                            isChecked="checked"
                            name="mealType"
                            id="details-breakfast"
                            value="breakfast"
                            onChange={(e) => toggleMenuChoice(e.target.value)}
                            item= "ONTBIJT"
                        />
                        <Radiobutton
                            register={register}
                            name="mealType"
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
                    {/*    <Radiobutton*/}
                    {/*        className="snack-item"*/}
                    {/*        register={register}*/}
                    {/*        name="mealType"*/}
                    {/*        id="details-snack"*/}
                    {/*        value="snack"*/}
                    {/*        onChange={(e) => toggleMenuChoice(e.target.value)}*/}
                    {/*        item="SNACK"*/}
                    {/*    />*/}
                    </label>

                <Dropbox
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
                    htmlFor="details-healthdropbox"
                    header="Heb je Allergieën?"
                    register={register}
                    name="healthLabels"
                    id="health"
                    choice={healthChoice}
                    onChange={(e) => setHealthChoice(e.target.value)}
                    value1=" "              title1="Geen"
                    value2="diary-free"     title2="Koemelk-allergie"
                    value3="gluten-free"    title3="Gluten-allergie"
                    value4="peanut-free"    title4="Pinda-allergie"
                    value5="egg-free"       title5="Eieren-allergie"
                    value6="shelfish-free"    title6="Schaaldier-allergie"

                />
                <Dropbox
                    htmlFor="details-cuisinedropbox"
                    header="Voorkeur voor een keuken?"
                    register={register}
                    name="cuisineLabels"
                    id="cuisine"
                    choice={cuisineChoice}
                    onChange={(e) => setCuisineChoice(e.target.value)}
                    value1=" "              title1="Geen Voorkeur"
                    value2="chinese"     title2="Chinese keuken"
                    value3="italian"   title3="Italiaanse keuken"
                    value4="mexican"       title4="Mexicaanse keuken"
                    value5="japanese"        title5="Japanse keuken"
                    value6="french"     title6="Franse keuken"
                />
                    <Counter
                        onChange={(e) => setMinCalorie(e.target.value)}
                        register={register}
                        name="min calories"
                        title="minimaal aantal calorieën"
                        counter={minCalorie}
                        setCounter={setMinCalorie}
                        />
                    <Counter
                        onChange={(e) => setMaxCalorie(e.target.counter)}
                        register={register}
                        name="max calories"
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