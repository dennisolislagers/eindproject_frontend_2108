import React from 'react';
import {useHistory} from "react-router-dom";


function Breakfastpage () {
    const history = useHistory()
     function goToMainMenuPage() {
         history.push('/main-menu')
     }
    return (
        <div>
            <h1>ONTBIJTEN</h1>
            <button type="button" onClick={goToMainMenuPage} className='backToMainButton'>
                Terug naar het Hoofdmenu
            </button>
        </div>
    );
}

export default Breakfastpage;