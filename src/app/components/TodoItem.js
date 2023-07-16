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

            return [...newList];
        });

        setIsComplete((prevState) => !prevState);
    };

    const onDeleteHandler = (e) => {
        const textContent =
            e.target.previousElementSibling.lastElementChild.innerHTML;

        setList((prevState) => {
            const newList = prevState.filter((item) => {
                return item.content !== textContent;
            });

            return newList;
        });
    };

    return (
        <div className="flex cursor-pointer items-center justify-between border-b-2 px-[2.4rem] py-[1.6rem] dark:border-[#393A4B]">
            <div className="flex items-center gap-4 tablet:gap-[2.4rem]">
                <SelectButton
                    isComplete={isComplete}
                    setIsComplete={setIsCompleteHandler}
                />
                <p
                    className={
                        isComplete
                            ? 'text-[1.2rem] text-secondary line-through tablet:text-[1.8rem] tablet:font-normal'
                            : 'text-[1.2rem] tablet:text-[1.8rem] tablet:font-normal'
                    }
                    ref={pRef}
                >
                    {item.content}
                </p>
            </div>
            <Image
                src={CrossIcon}
                width="12"
                height="12"
                className="h-[1.2rem] w-[1.2rem]"
                alt="cross"
                onClick={onDeleteHandler}
            />
        </div>
    );
};

export default TodoItem;
