import React, { useEffect, useState, useContext } from 'react';
import Button from "../../components/button/Button";
import './Resultpage.css'
import axios from "axios";
import QueryForm from "../../components/queryform/QueryForm";
// import Result from "../../components/result/Result";
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
    }, [query])

    return (
        <div className="page-container">
            {!showResult ?
                <div>
                    <QueryForm setQueryHandler={setQuery}/>
                </div>
                :
                <>
                    <fieldset>
                        <legend>RESULTATEN</legend>
                    <div>
                        {error && <p>Er is iets misgegaan, sluit af en start opnieuw op </p>}
                        {loading && <img className="loading-icon" src={zandloper} alt=""/>}
                    </div>

                <div className="resultpage-container">
                    {menuData &&
                    menuData.hits.map((recipe) => {
                        return (
                            <div className='result-item' key={recipe.recipe.label}>
                                <h3>{recipe.recipe.label}</h3>
                                <a href={recipe.recipe.url}>LINK NAAR PAGINA</a>
                                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                                <p>Calorieën: {roundedNumbers(recipe.recipe.calories)}</p>
                                <p>Bron: {recipe.recipe.source}</p>
                            </div>
                        )
                    })}

                </div>
                    <Button
                        type="button"
                        onClick={goToMainMenuPage}
                        title="KEUZEMENU"/>
                    <Button
                        onClick={() => setQuery(menuData._links.next.href)}
                        title="Volgende 20"
                    />
                    </fieldset>
                </>}
        </div>   )
    }
export default Resultpage;