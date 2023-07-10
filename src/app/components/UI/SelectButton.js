'use client';

import Image from 'next/image';

import IconCheck from '../../../../public/assets/images/icon-check.svg';

const SelectButton = ({ isComplete, setIsComplete }) => {
    const onClickHandler = () => {
        setIsComplete((prevState) => !prevState);
    };

    const buttonClass = isComplete
        ? 'w-[2rem] h-[2rem] inline p-[.4rem] rounded-full bg-gradient-to-br from-stop1 to-stop2 transition-all duration-200 cursor-pointer'
        : 'w-[2rem] h-[2rem] p-[.8rem] inline rounded-full border-[2px] border-[#E3E4F1] transition-all duration-200 cursor-pointer';

    return (
        <Image
            src={IconCheck}
            alt="tick"
            width="20px"
            height="20px"
            className={buttonClass}
            onClick={onClickHandler}
        />
    );
};

export default SelectButton;
