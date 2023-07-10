'use client';

import { createContext, useEffect, useState } from 'react';

const TODO = [
    {
        id: 1,
        content: 'Complete online JavaScript course',
        complete: true,
    },
    {
        id: 2,
        content: 'Jog around the park 3x',
        complete: false,
    },
    {
        id: 3,
        content: '10 minutes meditation',
        complete: true,
    },
    {
        id: 4,
        content: 'Read for 1 hour',
        complete: false,
    },
    {
        id: 5,
        content: 'Pick up groceries',
        complete: false,
    },
    {
        id: 6,
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
