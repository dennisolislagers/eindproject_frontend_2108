import React, { createContext, useState } from 'react';

export const AuthenticatedContext = createContext({})

function AuthenticatedContextProvider ({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);


    function login () {
        toggleIsAuthenticated(true)
    }

    function logout () {
        toggleIsAuthenticated(false)
    }

    const data = {
        isAuthenticated : isAuthenticated,
        login : login,
        logout : logout,
    }

    return (
        <AuthenticatedContext.Provider value={data}>
            {children}
        </AuthenticatedContext.Provider>
    );
}

export default AuthenticatedContextProvider;