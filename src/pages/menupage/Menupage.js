import React from 'react';
import { useHistory } from "react-router-dom";


function Menupage () {
    const history = useHistory()

    function goToBreakfastpage () {
        history.push('/breakfast')
    }
    function goToLunchpage () {
        history.push('/lunch')
    }
    function goToDinerpage (){
        history.push('./diner')
    }
    return (
        <div>
            <h1>Dit is het hoofdmenu</h1>
            <button type="button" onClick={goToBreakfastpage}>
                Ontbijtmenu
            </button>
            <button type="button" onClick={goToLunchpage}>
                Lunchmenu
            </button>
            <button type="button" onClick={goToDinerpage}>
                Dinermenu
            </button>
        </div>
    );
};

export default Menupage;