'use client';

import Image from 'next/image';

import IconCheck from '../../../../public/assets/images/icon-check.svg';

const SelectButton = ({ isComplete, setIsComplete }) => {
    const onClickHandler = () => {
        setIsComplete((prevState) => !prevState);
    };

    const isCompleteClass =
        'w-[2rem] h-[2rem] inline p-[.4rem] rounded-full bg-gradient-to-br from-stop1 to-stop2 transition-all duration-200 cursor-pointer';
    const isNotCompleteClass =
        'w-[2rem] h-[2rem] p-[.8rem] inline rounded-full border-[2px] border-[#E3E4F1] dark:border-[#393A4B] transition-[p] duration-200 cursor-pointer';

    return (
        <Image
            src={IconCheck}
            alt="tick"
            width="20px"
            height="20px"
            className={isComplete ? isCompleteClass : isNotCompleteClass}
            onClick={onClickHandler}
        />
    );
};

export default SelectButton;
