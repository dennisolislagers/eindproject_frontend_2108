import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import NavMenu from './components/navmenu/NavMenu';
import HomePage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';
import Subscribepage from './pages/subscribepage/Subscribepage';
import Menupage from './pages/menupage/Menupage.js';
import Breakfastpage from "./pages/breakfastpage/Breakfastpage";

import './App.css';
import Lunchpage from "./pages/lunchpage/Lunchpage";
import Dinerpage from "./pages/dinerpage/Dinerpage";


function App() {
    return (
        <Router>
            <NavMenu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/inloggen">
                    <Loginpage />
                </Route>
                <Route path="/inschrijven">
                    <Subscribepage />
                </Route>
                <Route path="/main-menu">
                    <Menupage />
                </Route>
                <Route path="/breakfast">
                    <Breakfastpage />
                </Route>
                <Route path="/lunch">
                    <Lunchpage />
                </Route>
                <Route path="/diner">
                    <Dinerpage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
