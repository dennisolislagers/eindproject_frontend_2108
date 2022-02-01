import React, { useEffect, useState, useContext } from 'react';
import Button from "../../components/button/Button";
import './Resultpage.css'
import axios from "axios";
import QueryForm from "../../components/queryform/QueryForm";
import roundedNumbers from "../../helpers/roundedNumbers";
import { ShowResultContext} from "../../context/ShowResultContext";
import zandloper from "../../assets/logo zandloper.png"

function Resultpage () {
    const [menuData, setMenuData] = useState('');
    const [loading, toggleLoading] = useState(false)
    const [error, toggleError] = useState(false)
    const [query, setQuery] = useState('');
    const { form } = useContext(ShowResultContext)
    const { showResult } = useContext(ShowResultContext)
    function goToMainMenuPage() {
        form()
    }

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);
            try {
                const result = await axios.get(query);
                console.log(result.data);
                console.log(result.data.hits)
                setMenuData(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
    if (query) {

        fetchData()
    }
    else{
        return (
            "Geen resultaat, probeer opnieuw"
        )
        }
    }, [query])

    return (
        <div >
            {!showResult ?
                <div className="page-container">
                    <QueryForm setQueryHandler={setQuery}/>
                </div>
                :
                <>
                    <div>
                        {error && <p>Er is iets misgegaan, sluit af en start opnieuw op </p>}
                        {loading && <div className="loading-container"><img className="loading-icon" src={zandloper} alt=""/></div>}
                    </div>
                    {menuData &&
                    menuData.hits.slice(0, 1).map((recipe) => {
                        return (
                            <div key={recipe.recipe.label} className="resultpage-container">
                                <header id="item-header">{recipe.recipe.label}</header>
                                <img id="item-image"src={recipe.recipe.image} alt={recipe.recipe.label}/>
                                <a id="item-link" href={recipe.recipe.url}>LINK NAAR PAGINA</a>
                                <p id="item-calorie">Calorieën per portie: {roundedNumbers(recipe.recipe.calories/recipe.recipe.yield)}</p>
                                <p id="item-source">Bron: {recipe.recipe.source}</p>
                                <div id="item-ingredients"><h3>INGREDIENTS:</h3> <p>{recipe.recipe.ingredientLines.map((ingredients) =>{
                                     return(
                                        <li>{ingredients}</li>
                                     )
                                        })}
                                    </p>
                                </div>
                                <div id="item-labels"><h3>HEALTHLABELS</h3><p>{recipe.recipe.healthLabels.map((labels) => {
                                    return(
                                        <li>{labels} </li>
                                    )
                                        })}
                                    </p>
                                </div>

                                <div id="item-button">
                                    <Button
                                        type="button"
                                        onClick={goToMainMenuPage}
                                        title="KEUZEMENU"
                                    />
                                </div>
                            </div>
                        )
                    })}

                </>}
        </div>   )
    }
export default Resultpage;