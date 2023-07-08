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
        <header className='flex items-center justify-between p-[3rem] w-full'>
            <p className='uppercase text-white text-[2.5rem] font-bold tracking-[1rem] tablet:text-[3.3rem] tablet:tracking-[1.2rem]'>
                todo
            </p>
            {isDark && (
                <Image
                    src={IconSun}
                    alt='sun'
                    height='20px'
                    width='20px'
                    className='w-[2rem] h-[2rem] cursor-pointer tablet:w-[2.6rem] tablet:h-[2.6rem]'
                    onClick={onClickHandler}
                />
            )}
            {!isDark && (
                <Image
                    src={IconMoon}
                    alt='moon'
                    height='20px'
                    width='20px'
                    className='w-[2rem] h-[2rem] cursor-pointer tablet:w-[2.6rem] tablet:h-[2.6rem]'
                    onClick={onClickHandler}
                />
            )}
        </header>
    );
};

export default Header;
