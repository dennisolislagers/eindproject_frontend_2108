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

        <nav className="navmenu-container">
            <NavLink to="/" ><i className="fas fa-home"> </i></NavLink>
                <p>WAT ETEN WE VANDAAG?</p>
              <span>
                  {isAuthenticated ?
                    <>
                    <NavLink to="/" onClick= {logoutButton} ><i className="fas fa-sign-out-alt"> </i></NavLink>
                    </>
                    :
                    <>
                    <NavLink to="/inloggen" ><i className="fas fa-sign-in-alt"> </i></NavLink>
                    <NavLink to="/inschrijven" ><i className="fas fa-user-plus"> </i></NavLink>
                    </>
                }
              </span>
        </nav>

    );
};
export default NavMenu;