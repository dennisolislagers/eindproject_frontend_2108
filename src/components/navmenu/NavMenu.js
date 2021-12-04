import React from 'react';
import {NavLink} from 'react-router-dom';

function NavMenu () {
    return (
        <nav>
            <div className="nav-menu-container">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/inloggen" activeClassName="active-link">Inloggen</NavLink>
                </li>

                <li>
                    <NavLink to="/inschrijven" activeClassName="active-link">Inschrijven</NavLink>
                </li>
                <li>
                    <NavLink to="/breakfast" activeClassName="active-link">Ontbijten</NavLink>
                </li>
                <li>
                    <NavLink to="/lunch" activeClassName="active-link">Lunchen</NavLink>
                </li>
                <li>
                    <NavLink to="/diner" activeClassName="active-link">Dineren</NavLink>
                </li>


            </ul>
            </div>
        </nav>
    );
};

export default NavMenu;