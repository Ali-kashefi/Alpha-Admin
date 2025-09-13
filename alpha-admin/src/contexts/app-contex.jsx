"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";

const AppContext = createContext();

const initialState = {
    language: 'fa'
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            dispatch({ type: 'CHANGE_LANGUAGE', payload: storedLanguage });
        }
    }, []);

    const changeLanguage = (language) => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language });
    };

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction = state.language === 'fa' ? 'rtl' : 'ltr';
    }, [state.language, i18n]);

    return (
        <AppContext.Provider value={{ ...state, changeLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { useAppContext, AppProvider };