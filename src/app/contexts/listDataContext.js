'use client';

import { createContext, useEffect, useState } from 'react';

const TODO = [
    {
        id: Math.random(),
        content: 'Complete online JavaScript course',
        complete: true,
    },
    {
        id: Math.random(),
        content: 'Jog around the park 3x',
        complete: false,
    },
    {
        id: Math.random(),
        content: '10 minutes meditation',
        complete: true,
    },
    {
        id: Math.random(),
        content: 'Read for 1 hour',
        complete: false,
    },
    {
        id: Math.random(),
        content: 'Pick up groceries',
        complete: false,
    },
    {
        id: Math.random(),
        content: 'Complete Todo App on Frontend Mentor',
        complete: false,
    },
];

const ListDataContext = createContext();

const ListDataProvider = ({ initialListState, children }) => {
    const [list, setList] = useState(TODO);

    return (
        <ListDataContext.Provider value={{ list, setList }}>
            {children}
        </ListDataContext.Provider>
    );
};

export { ListDataContext, ListDataProvider };
