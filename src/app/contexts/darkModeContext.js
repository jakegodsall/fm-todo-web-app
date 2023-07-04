import { createContext, useState, useEffect } from 'react';

import isDarkMode from '../utils/isDarkMode';

const setDarkModeRaw = () => {
    const root = window.document.documentElement;

    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');

    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
};

const DarkModeContext = createContext();

const DarkModeProvider = ({ initialDarkMode, children }) => {
    const [darkMode, setDarkMode] = useState(isDarkMode);

    if (initialDarkMode) {
        setDarkModeRaw();
    }

    useEffect(() => {
        setDarkModeRaw(darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDArkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider };
