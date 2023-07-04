'use client';

import { useState, useContext, useEffect } from 'react';
import { DarkModeContext, darkModeProvider } from '../contexts/darkModeContext';

import Image from 'next/image';

import IconSun from '../../../public/assets/images/icon-sun.svg';
import IconMoon from '../../../public/assets/images/icon-moon.svg';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const [isDark, setIsDark] = useState(darkMode);

    const onClickHandler = () => {
        setIsDark((prevState) => !prevState);
    };

    useEffect(() => {
        setDarkMode((prevState) => !prevState);
    }, [isDark]);

    return (
        <header className='flex items-center justify-between p-12'>
            <p className='uppercase text-white'>todo</p>
            {isDark && (
                <Image
                    src={IconSun}
                    alt='sun'
                    height='30px'
                    width='30px'
                    className='w-[3rem] h-[3rem]'
                    onClick={onClickHandler}
                />
            )}
            {!isDark && (
                <Image
                    src={IconMoon}
                    alt='moon'
                    height='30px'
                    width='30px'
                    className='w-[3rem] h-[3rem]'
                    onClick={onClickHandler}
                />
            )}
        </header>
    );
};

export default Header;
