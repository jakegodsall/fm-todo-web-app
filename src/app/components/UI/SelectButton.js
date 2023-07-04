'use client';

import { useState } from 'react';

import Image from 'next/image';

import IconCheck from '../../../../public/assets/images/icon-check.svg';

const SelectButton = () => {
    const [isActive, setIsActive] = useState(true);

    const onClickHandler = () => {
        setIsActive((prevState) => !prevState);
    };

    const buttonClass = isActive
        ? 'w-12 h-12 inline p-[.7rem] rounded-full border-[2px] border-[#d2d3db] border-black transition-all duration-200 cursor-pointer'
        : 'w-12 h-12 inline p-[1.3rem] rounded-full border-[2px] border-[#d2d3db] border-black transition-all duration-200 cursor-pointer';

    return (
        <Image
            src={IconCheck}
            alt='tick'
            width='20px'
            height='20px'
            className={buttonClass}
            onClick={onClickHandler}
        />
    );
};

export default SelectButton;
