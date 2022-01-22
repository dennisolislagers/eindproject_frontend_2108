import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from 'jwt-decode'
import axios from "axios";
import zandloper from "../assets/logo zandloper.png"

export const AuthenticatedContext = createContext({})

function AuthenticatedContextProvider ({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState({
        isAuthenticated:false,
        user: null,
        status:'pending'
    });

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token){

            const decodedToken = jwt_decode(token)
            getUserData(decodedToken.sub, token)
        }else{
            toggleIsAuthenticated({
                isAuthenticated: false,
                user:null,
                status: 'done'
            })
        }
    }, [])

    function login (JWT) {
        localStorage.setItem('token', JWT)

        const decodedToken = jwt_decode(JWT)
        toggleIsAuthenticated({
            ...isAuthenticated,
            isAuthenticated: true,
            user:{
                email: decodedToken.email,
                username:decodedToken.username,
                id: decodedToken.sub,
            }
        })
        getUserData(decodedToken.sub, JWT)
        history.push('/menu')
    }

    function logout () {
        localStorage.clear()
        toggleIsAuthenticated({
            ...isAuthenticated,
            isAuthenticated: false,
            user: null,
        });
        history.push('/')
    }

    async function getUserData(id, token){

        try{
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/${id}`,
                {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`,
                })
            toggleIsAuthenticated({
                ...isAuthenticated,
                isAuth: true,
                user:{
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.sub,
                },
                status:'done'
            });

        }catch(e) {
            console.error(e)
        }
    }

    const data = {
        isAuthenticated: isAuthenticated.isAuthenticated,
        user: isAuthenticated.user,
        login : login,
        logout : logout,
    }

    return (
        <AuthenticatedContext.Provider value={data}>
            {isAuthenticated.status === 'done' ? children : <div className="loading-container"><img className="loading-icon" src={zandloper} alt=""/></div>}
            r
        </AuthenticatedContext.Provider>
    );
}

export default AuthenticatedContextProvider;