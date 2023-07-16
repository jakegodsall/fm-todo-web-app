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
        <div className="mx-auto h-screen max-w-[150rem] bg-secondary">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="flex h-[22rem] w-full flex-col bg-mobile-light bg-cover bg-center bg-no-repeat dark:bg-mobile-dark tablet:bg-desktop-light dark:tablet:bg-desktop-dark"
                >
                    <div className="mx-auto w-full max-w-[57rem]">
                        <Header />
                        <TodoInput />
                        <TodoList filter={filter} setFilter={setFilter} />
                        <FilterBar
                            filter={filter}
                            setFilter={setFilterHandler}
                        />
                        <p className="mt-[4rem] hidden text-center text-[1.4rem] tracking-wide text-secondary sm:block">
                            Drag and drop to reorder list
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
