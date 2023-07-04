'use client';

import { createContext, useState, useEffect } from 'react';

import isDarkMode from '../utils/isDarkMode';

const setDarkModeRaw = (darkMode) => {
    const root = window.document.documentElement;

    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');

    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
};

const DarkModeContext = createContext();

const DarkModeProvider = ({ initialDarkMode, children }) => {
    const [darkMode, setDarkMode] = useState(isDarkMode);

    if (initialDarkMode) {
        setDarkModeRaw(darkMode);
    }

    useEffect(() => {
        setDarkModeRaw(darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider };
