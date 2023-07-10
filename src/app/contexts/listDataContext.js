'use client';

import { createContext, useEffect, useState } from 'react';

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
