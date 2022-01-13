import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "../../components/button/Button";
import './Resultpage.css'
import axios from "axios";
import QueryForm from "../../components/queryform/QueryForm";
import roundedNumbers from "../../helpers/roundedNumbers";


const apiKey = '77cbcf9f1fa3d4f3c17a7c2f9abe2e8a'
const apiId = '3fe16d27'

function Resultpage () {
    const [menuData, setMenuData] = useState('');
    const [loading, toggleLoading] = useState(false)
    const [error, toggleError] = useState(false)
    const [query, setQuery] = useState('');
    const history = useHistory();

    function goToMainMenuPage() {
        history.push('/')
    }

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);
            try {
                const result = await
                    axios.get(`https://api.edamam.com/search?app_id=${apiId}&app_key=${apiKey}&q=${query}&=pork`);
                console.log(result.data.hits[0]);
                setMenuData(result.data.hits);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
    if (query) {

        fetchData()
    }
    }, [query])

    return (
        <>
            <div>
                <QueryForm setQueryHandler={setQuery}/>
            </div>
            <div className="page-container">
                <h1>resultaten</h1>
                <div>
                    {error && <p>Er is iets misgegaan, sluit af en start opnieuw op </p>}
                    {loading && <p>Bezig met ophalen van de gegevens</p>}
                </div>
                {menuData &&
                menuData.map((recipe) => {
                      return(
                          <>
                          <h1>{recipe.recipe.label}</h1>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                            <p>Calorieën: {roundedNumbers(recipe.recipe.calories)}</p>
                            <a href={recipe.recipe.url}>Link naar de Webpagina</a>
                            <li>{recipe.recipe.healthLabels}</li>
                            </>
                          )
                    })}
                <div>
                    <Button
                        type="button"
                        onClick={goToMainMenuPage}
                        title="Terug naar het hoofdmenu"/>
                </div>
            </div>

        </>
    )
    }
export default Resultpage;