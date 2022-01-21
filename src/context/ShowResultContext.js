import React, { createContext, useState } from "react";

export const ShowResultContext = createContext ( {})

function ShowResultContextProvider ({children}) {
    const [showResult, toggleShowResult] = useState (false);

    function result () {
        toggleShowResult(true)
    }

    function form () {
        toggleShowResult(false)
    }

    const data = {
        showResult : showResult,
        result : result,
        form : form,
    }

    return (
        <ShowResultContext.Provider value={data}>
            {children}
        </ShowResultContext.Provider>
    );
}
export default ShowResultContextProvider;

