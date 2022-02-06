import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './Homepage.css';
import { AuthenticatedContext } from "../../context/AuthenticatedContext";
import { ShowResultContext} from "../../context/ShowResultContext";

function Homepage () {

        const { isAuthenticated, logout } = useContext(AuthenticatedContext)
        const { form } = useContext(ShowResultContext)

        function logoutButton () {
                logout()
        }
        function goToMenupage () {
                form()
        }


    return (
        <div id="homepage-container">
            <h2>Welkom op mijn webpagina</h2>
            <p>Mijn naam is Dennis Olislagers, ik woon in de mooie stad Maastricht samen met mijn vriendin en hond.</p>
            <p>Heel vaak komt het voor dat ik na een dag werken thuis kom en dan moet er nog eten gemaakt worden.</p>
            <p>Op dat moment komt de veel gestelde vraag: wat eten we vandaag???</p>
            <p>Omdat de keuze tegenwoordig enorm is ontstaat er vaak keuzestress en om deze keuzestress weg te nemen heb ik deze webpagina gemaakt welke de keuze voor jou maakt.</p>
            <p>De applicatie kan voor jou een random gerecht uitzoeken, de enige verplichte keuze die gemaakt moet worden is of het een ontbijt, lunch of avondeten betreft.</p>
            <p>Omdat niet iedereen even avontuurlijk is ingesteld heb ik diverse mogelijkheden ingebouwd waardoor je zelf invloed hebt op de keuze die de applicatie maakt.</p>
            <p>Zo kun je kiezen uit diverse dieëten, keukens en er is zelfs een calorieteller beschikbaar.</p>
            <p>Als je nieuwsgierig bent geworden, registreer jezelf en ga aan de slag en vergeet je niet aan te melden voor de nieuwsbrief voor leuke weetjes.</p>
            <p>Vind je de applicatie leuk of heb je ander commentaar, stuur me een berichtje via de contactmail.</p>
            <p>Ook sta ik altijd open voor commentaar dus als er iets is dat je mist of beter kan mag je ook altijd achterlaten.</p>
                <br/>
                <p>VEEL KOOKPLEZIER</p>
            <br/>
                {isAuthenticated ?
                <>
                <p>Klik <Link to="./" onClick={logoutButton}>HIER</Link> om uit te loggen.</p>
                <p>Klik <Link to='./menu' onClick={goToMenupage}>HIER</Link> om naar het keuzemenu te gaan</p>
                </>
                        :
                <>
                <p>Klik <Link to="/inloggen">HIER</Link> om in te loggen.</p>
                <p>Klik <Link to ="/inschrijven">HIER</Link> om je in te registreren.</p>
                </>
                }
        </div>
    );
}

export default Homepage;