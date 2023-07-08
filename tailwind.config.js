/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                stop1: 'var(--color-linear-gradient1)',
                stop2: 'var(--color-linear-gradient2)',
            },
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
            },
            textColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            },
            fontSize: {
                primary: '18px',
            },
            backgroundImage: {
                'desktop-dark': 'url("/assets/images/bg-desktop-dark.jpg")',
                'desktop-light': 'url("/assets/images/bg-desktop-light.jpg")',
                'mobile-dark': 'url("/assets/images/bg-mobile-dark.jpg")',
                'mobile-light': 'url("/assets/images/bg-mobile-light.jpg")',
            },
        },
    },
    plugins: [],
};
