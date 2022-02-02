import React, { useContext } from 'react';
import {Switch, Route, Redirect,} from 'react-router-dom';
import NavMenu from './components/navmenu/NavMenu';
import HomePage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';
import Subscribepage from './pages/subscribepage/Subscribepage';
import './App.css';
import Resultpage from "./pages/resultpage/Resultpage";
import { AuthenticatedContext } from "./context/AuthenticatedContext";
import Footer from "./components/footer/Footer";
import kookhuis from "./assets/kookhuis.jpeg"
import oilandvinegar from "./assets/logo oil and vinegar.jpeg"
import bbqshoplimburg from "./assets/bbqshoplimburg.png"
import dilleenkamille from "./assets/dille-en-kamille-logo.jpeg"
import albertheyn from "./assets/logo_albert-heyn.png"
import jumbo from "./assets/jumbo.png"

function App() {
    const { isAuthenticated } = useContext(AuthenticatedContext)
    return (
        <div className="app-container">
            <div id="item-navmenu">
            <NavMenu />
            </div>
            <div className="item-add" id="add1">
                <a href="https://www.kookwinkel.nl/dochterwinkel-kookhuis-aan-de-maes"><img src={kookhuis} alt="add1"/></a>
            </div>
            <div className="item-add" id="add2">
                <a href="https://www.oilvinegar.nl/"><img src={oilandvinegar} alt="add2"/></a>
            </div>
            <div className="item-add" id="add3">
                <a href="https://www.bbqshoplimburg.nl/"><img src={bbqshoplimburg} alt="add3"/></a>
            </div>
            <div className="item-add" id="add4">
                <a href="https://www.dille-kamille.nl/"><img src={dilleenkamille} alt="add4"/></a>
            </div>
            <div className="item-add" id="add5">
                <a href="https://www.ah.nl/"><img src={albertheyn} alt="add5"/></a>
            </div>
            <div className="item-add" id="add6">
                <a href="https://www.jumbo.com/"><img src={jumbo} alt="add6"/></a>
            </div>
            <div className="item" id="item-switch">
            <Switch >
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/inloggen">
                    <Loginpage/>
                </Route>
                <Route path="/inschrijven">
                    <Subscribepage />
                </Route>
                <Route path="/menu">
                    { isAuthenticated ? <Resultpage /> : <Redirect to="/"/>}
                </Route>
            </Switch>
            </div >
            <div id="item-footer">
                <Footer />
            </div>
        </div>
);
}

export default App;
