import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import { AuthenticatedContext}  from "../../context/AuthenticatedContext";


function NavMenu () {

    const { isAuthenticated } = useContext(AuthenticatedContext)
    const { logout } = useContext(AuthenticatedContext)

    return (
        <nav>
            <NavLink to="/" exact activeClassName="home-container">Home</NavLink>
              <span>
                  {isAuthenticated ?
                    <>
                    <NavLink className="link-button" to="/menu" >Hoofdmenu</NavLink>
                    <NavLink className="link-button" to="/" onClick={ logout } >Uitloggen</NavLink>
                    </>
                    :
                    <>
                    <NavLink className="link-button" to="/inloggen" >Inloggen</NavLink>
                    <NavLink className="link-button" to="/inschrijven" >Inschrijven</NavLink>
                    </>
                }
              </span>
        </nav>
    );
};
export default NavMenu;