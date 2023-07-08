'use client';

import { useState } from 'react';

import FilterBar from './components/FilterBar';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function Home() {
    const [filter, setFilter] = useState('all');

    const setFilterHandler = (filter) => {
        setFilter(filter);
    };

    return (
        <div className='bg-mobile-light w-full h-[16rem] bg-no-repeat bg-cover bg-center flex flex-col'>
            <Header />
            <TodoInput />
            <TodoList />
            <FilterBar filter={filter} setFilter={setFilterHandler} />
            <p className='text-center text-[1.4rem] text-[#9495A5] tracking-wide mt-[4rem]'>
                Drag and drop to reorder list
            </p>
        </div>
    );
}
