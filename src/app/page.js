'use client';

import { useState } from 'react';

import FilterBar from './components/FilterBar';
import Header from './components/Header';
import TodoList from './components/TodoList';

const TODO = [
    {
        content: 'Complete online JavaScript course',
        complete: true,
    },
    {
        content: 'Jog around the park 3x',
        complete: false,
    },
    {
        content: '10 minutes meditation',
        complete: true,
    },
    {
        content: 'Read for 1 hour',
        complete: false,
    },
    {
        content: 'Pick up groceries',
        complete: false,
    },
    {
        content: 'Complete Todo App on Frontend Mentor',
        complete: false,
    },
];

export default function Home() {
    const [filter, setFilter] = useState('all');

    const setFilterHandler = (filter) => {
        setFilter(filter);

        console.log('from page', filter);
    };

    return (
        <div className='bg-mobile-light w-full h-[16rem] bg-no-repeat bg-cover bg-center'>
            <Header />
            <TodoList list={TODO} />
            <FilterBar filter={filter} setFilter={setFilterHandler} />
        </div>
    );
}
