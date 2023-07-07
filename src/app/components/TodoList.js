'use client';

import Card from './UI/Card';
import TodoItem from './TodoItem';
import { useState } from 'react';

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

const TodoList = () => {
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [],
    };

    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
    const [list, setList] = useState(TODO);

    const onDragStartHandler = (e) => {
        const initialPosition = e.currentTarget.dataset;

        setDragAndDrop({
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: list,
            ...dragAndDrop,
        });

        e.dataTransfer.setData('text/html', '');
    };

    const onDragOverHandler = (e) => {
        e.preventDefault();

        let newList = dragAndDrop.originalOrder;

        const draggedFrom = dragAndDrop.draggedFrom;

        const draggedTo = Number(e.currentTarget.dataset.position);

        const itemDragged = newList[draggedFrom];

        const remainingItems = newList.filter((item, key) => key !== draggedFrom);

        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo),
        ];

        if (draggedTo !== dragAndDrop.draggedTo) {
            setDragAndDrop({
                ...dragAndDrop,

                updatedOrder: newList,
                draggedTo: draggedTo,
            });
        }
    };

    const onDropHandler = (e) => {
        setList(dragAndDrop.updatedOrder);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false,
        });
    };

    return (
        <Card className=''>
            <ul className='flex flex-col'>
                {list.map((item, key) => {
                    return (
                        <li
                            key={key}
                            draggable='true'
                            onDragStart={onDragStartHandler}
                            onDragOver={onDragOverHandler}
                            onDrop={onDropHandler}
                            data-position={key}
                        >
                            <TodoItem item={item} />
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default TodoList;
