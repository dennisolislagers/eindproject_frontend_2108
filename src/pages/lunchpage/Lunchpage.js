import React from 'react';
import {useHistory} from "react-router-dom";

function Lunchpage () {
    const history = useHistory()
    function goToMainMenuPage() {
        history.push('/main-menu')
    }
    return (
        <div>
            <h1>LUNCHEN</h1>
            <button type="button" onClick={goToMainMenuPage} className='backToMainButton'>
                Terug naar hoofdmenu
            </button>
        </div>
    );
}

export default Lunchpage;