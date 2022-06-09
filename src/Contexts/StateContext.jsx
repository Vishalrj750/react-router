import React from "react";

export const MyState = React.createContext();

export const MyStateProvider = ({ children }) => {
    const [state, setState] = React.useState([]);

    return(
        <MyState.Provider value={{ state, setState }}>
            { children }
        </MyState.Provider>
    )
}