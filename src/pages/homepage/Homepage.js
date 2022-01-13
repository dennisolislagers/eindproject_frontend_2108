import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './Homepage.css';
import { AuthenticatedContext } from "../../context/AuthenticatedContext";

function Homepage () {

        const { isAuthenticated } = useContext(AuthenticatedContext)

    return (
        <div className="page-container">
            <h1>WAT ETEN WE VANDAAG</h1>
            <h2>Welkom op mijn webpagina.</h2>
            <p>Ik ben Dennis Olislagers en in mijn vrije tijd doe ik heel graag koken.</p>
            <p>Heel vaak kom ik thuis na het werken en weet ik niet goed welk eten ik moet gaan bereiden.</p>
            <p>Omdat ik hierover ook vaak discussies heb met mijn vriendin ben ik op het idee gekomen om eem webpagina te maken die deze keuze voor mij maakt.</p>
            <p>Door al dit eten komt het nog wel eens voor dat je een kilootje bijkomt, hierdoor heb ik gedacht dat als ik deze webpagina ga maken er ook keuzes gemaakt kunnen worden voor iemand die een speciaal dieet heeft.</p>
            <p>Mijn vriendin en ik lusten eigenlijk alles maar er zijn natuurlijk ook mensen die ietwat kieskeuriger zijn en hier wil ik uiteraard rekening mee houden.</p>
            <p>Met deze mensen heb ik in mijn webpagina ook rekening gehouden en hierdoor kun je een keuze maken om ingrediënten weg te laten die je niet lekker vindt.</p>
            <p>Ik zou zeggen, log in of schrijf je in en ga op ontdekkingstocht op mijn webpagina.</p>
            <p>Als je het een leuke webpagina vindt vind ik het heel erg leuk als je een opmerking achter laat op de pagina.</p>
            <p>Ook sta ik altijd open voor commentaar dus als er iets is dat je mist of beter kan mag je ook altijd achterlaten</p>
            <br/>
                {isAuthenticated ?
                <p>KLIK <Link to="/uitloggen">HIER</Link> om uit te loggen.</p>
                        :
                <>
                <p>Klik <Link to="/inloggen">HIER</Link> om in te loggen.</p>
                <p>Klik <Link to ="/inschrijven">HIER</Link> om je in te schrijven.</p>
                </>
                }
        </div>
    );
}

export default Homepage;