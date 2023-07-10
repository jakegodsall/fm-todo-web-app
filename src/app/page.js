'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex h-[16rem] w-full flex-col bg-mobile-light bg-cover bg-center bg-no-repeat"
            >
                <div className="mx-auto w-full max-w-[57rem]">
                    <Header />
                    <TodoInput />
                    <TodoList />
                    <FilterBar filter={filter} setFilter={setFilterHandler} />
                    <p className="mt-[4rem] text-center text-[1.4rem] tracking-wide text-[#9495A5]">
                        Drag and drop to reorder list
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
