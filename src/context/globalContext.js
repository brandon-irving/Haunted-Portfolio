import React, { useReducer, useContext, createContext } from 'react'

export const GlobalContext = createContext()

export const initialState = {
    theme: 'default',
}

export const actions = {
    setTheme: 'setTheme'
}

export const globalReducer = (state, action) => {
    switch (action.type) {
        case actions.setTheme:
            return {
                ...state,
                theme: action.theme,

            }
        default:
            return state
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    const setTheme = (theme) => dispatch({ type: actions.setTheme, theme })
    const globalState = {
        ...state,
        setTheme
    }

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
