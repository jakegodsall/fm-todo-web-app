'use client';

import { useState, useContext, useRef } from 'react';
import { ListDataContext } from '../contexts/listDataContext';

import Image from 'next/image';

import CrossIcon from '../../../public/assets/images/icon-cross.svg';
import SelectButton from './UI/SelectButton';

const TodoItem = ({ item }) => {
    const [isComplete, setIsComplete] = useState(item.complete);
    const { list, setList } = useContext(ListDataContext);

    const pRef = useRef();

    const setIsCompleteHandler = () => {
        setIsComplete((prevState) => !prevState);

        const todoContent = pRef.current.innerHTML;

        const newValue = list.filter((el) => el.content === todoContent)[0];
        newValue.complete = !newValue.complete;

        setList((prevState) => {
            const newList = prevState.map((val) => {
                if (val.content !== todoContent) {
                    return val;
                } else {
                    return newValue;
                }
            });

            return newList;
        });
    };

    const onDeleteHandler = (e) => {
        const textContent = e.target.previousElementSibling.lastElementChild.innerHTML;

        const newList = list.filter((item) => {
            return item.content !== textContent;
        });

        setList(newList);
    };

    return (
        <div className='flex items-center justify-between px-[2.4rem] py-[1.6rem] border-b-2 cursor-pointer'>
            <div className='flex gap-4 items-center tablet:gap-[2.4rem]'>
                <SelectButton isComplete={isComplete} setIsComplete={setIsCompleteHandler} />
                <p
                    className={
                        isComplete
                            ? 'font-bold text-[1.2rem] line-through tablet:text-[1.8rem] tablet:font-normal text-[#d1d2da]'
                            : 'font-bold text-[1.2rem] tablet:text-[1.8rem] tablet:font-normal'
                    }
                    ref={pRef}
                >
                    {item.content}
                </p>
            </div>
            <Image
                src={CrossIcon}
                width='12'
                height='12'
                className='w-[1.2rem] h-[1.2rem]'
                alt='cross'
                onClick={onDeleteHandler}
            />
        </div>
    );
};

export default TodoItem;
