'use client';

import Card from './UI/Card';
import SelectButton from './UI/SelectButton';

import { useContext } from 'react';
import { ListDataContext } from '../contexts/listDataContext';

const TodoInput = () => {
    const { list, setList } = useContext(ListDataContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const input = e.target.todo.value;
        const obj = {
            content: input,
            complete: false,
        };

        setList((prevState) => {
            return [...prevState, obj];
        });
    };

    return (
        <Card>
            <form
                onSubmit={onSubmitHandler}
                className="flex w-full items-center gap-[2.4rem] px-[2rem] py-[1.8rem]"
            >
                <SelectButton />
                <input
                    className="w-full bg-inherit text-[1.2rem] text-[#393A4b] outline-none tablet:text-[1.8rem]"
                    type="text"
                    name="todo"
                    placeholder="Create a new todo..."
                    maxLength="32"
                />
            </form>
        </Card>
    );
};

export default TodoInput;
