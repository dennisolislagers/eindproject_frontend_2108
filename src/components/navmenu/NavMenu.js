import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import { AuthenticatedContext}  from "../../context/AuthenticatedContext";
import {ShowResultContext} from "../../context/ShowResultContext";


function NavMenu () {

    const { isAuthenticated, logout } = useContext(AuthenticatedContext)
    const { form } = useContext(ShowResultContext)


    function logoutButton() {
         logout()
         form()
    }

    return (
        <nav>
            <NavLink to="/" exact activeClassName="home-container">Home</NavLink>
              <span>
                  {isAuthenticated ?
                    <>
                    <NavLink className="link-button" to="/" onClick= {logoutButton} >Uitloggen</NavLink>
                    </>
                    :
                    <>
                    <NavLink className="link-button" to="/inloggen" >Inloggen</NavLink>
                    <NavLink className="link-button" to="/inschrijven" >Registreren</NavLink>
                    </>
                }
              </span>
        </nav>
    );
};
export default NavMenu;