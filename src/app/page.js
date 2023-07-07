'use client';

import { useState } from 'react';

import FilterBar from './components/FilterBar';
import Header from './components/Header';
import TodoList from './components/TodoList';

export default function Home() {
    const [filter, setFilter] = useState('all');

    const setFilterHandler = (filter) => {
        setFilter(filter);

        console.log('from page', filter);
    };

    return (
        <div className='bg-mobile-light w-full h-[16rem] bg-no-repeat bg-cover bg-center'>
            <Header />
            <TodoList />
            <FilterBar filter={filter} setFilter={setFilterHandler} />
        </div>
    );
}
