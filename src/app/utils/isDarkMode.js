// check if dark mode is set in localStorage
const isDarkModeFromLocalStorage = () => {
    const value = localStorage.getItem('color-scheme');
    return typeof value === 'string' && value === 'dark';
};

// check if dark mode is set as prefers-color-scheme media query
const isDarkModeFromMediaQuery = () => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    return media.matches;
};

const isDarkMode = () => {
    return isDarkModeFromLocalStorage || isDarkModeFromMediaQuery;
};

export default isDarkMode;
