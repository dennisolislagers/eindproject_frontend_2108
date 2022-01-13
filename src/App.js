import React, { useContext } from 'react';
import {Switch, Route, Redirect,} from 'react-router-dom';
import NavMenu from './components/navmenu/NavMenu';
import HomePage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';
import Subscribepage from './pages/subscribepage/Subscribepage';
import './App.css';
import Resultpage from "./pages/resultpage/Resultpage";

import { AuthenticatedContext } from "./context/AuthenticatedContext";

function App() {
    const { isAuthenticated } = useContext(AuthenticatedContext)
    return (
        <>
            <NavMenu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/inloggen">
                    <Loginpage/>
                </Route>
                <Route path="/inschrijven">
                    <Subscribepage />
                </Route>
                <Route path="/resultaat">
                    { isAuthenticated ? <Resultpage /> : <Redirect to="/"/>}
                </Route>
            </Switch>
                <footer className="page-container">
                    <div id="edamam-badge" data-color="transparant"> </div>
                </footer>
        </>
);
}

export default App;
