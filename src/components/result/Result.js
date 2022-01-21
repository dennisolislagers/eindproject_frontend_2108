import React, {useEffect, useState} from 'react';
import roundedNumbers from "../../helpers/roundedNumbers";
import axios from "axios";

function Result ({datapoint}) {

    const [resultData, setResultData] = useState('');

    useEffect(() => {

        async function fetchData() {
            try{
                const result = await axios.get(datapoint);
                console.log(result.data);
                setResultData(result.data.hits);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData()
    }, [datapoint])

    return (
        <div className="result-items">
            {resultData &&
                resultData.map((recipe) => {
                return(
                    <>
                        <h2>{recipe.recipe.label}</h2>
                        <h3><a href={recipe.recipe.url}><img src={recipe.recipe.image} alt={recipe.recipe.label}/></a></h3>
                        <p>Calorieën: {roundedNumbers(recipe.recipe.calories)}</p>
                        <li>{recipe.recipe.healthLabels}</li>
                    </>
                )})
            }
        </div>
    );
};

export default Result;