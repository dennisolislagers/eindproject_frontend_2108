import React from 'react';
import {useHistory} from "react-router-dom";

function Dinerpage () {
    const history = useHistory()
    function goToMainMenuPage() {
        history.push('/main-menu')
    }
    return (
        <div>
            <h1>DINEREN</h1>
            <button type="button" onClick={goToMainMenuPage} className='backToMainButton'>
                Terug naar hoofdmenu
            </button>
        </div>
    );
}

export default Dinerpage;