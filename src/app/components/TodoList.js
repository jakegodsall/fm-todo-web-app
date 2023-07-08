'use client';

import { useState, useContext } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

import { ListDataContext } from '../contexts/listDataContext';
import Card from './UI/Card';
import TodoItem from './TodoItem';
import SummaryBar from './SummaryBar';

const TodoList = () => {
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [],
    };

    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
    const { list, setList } = useContext(ListDataContext);

    const onDragStartHandler = (e) => {
        // get initial number in the list
        const initialPosition = e.currentTarget.dataset.position;

        // set state as item is being dragged
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: list,
        });

        e.dataTransfer.setData('text/html', '');
    };

    const onDragOverHandler = (e) => {
        e.preventDefault();
    };

    const onDropHandler = (e) => {
        let newList = dragAndDrop.originalOrder;

        const draggedFrom = Number(dragAndDrop.draggedFrom);

        const draggedTo = Number(e.currentTarget.dataset.position);

        const itemDragged = newList[draggedFrom];

        const remainingItems = newList.filter((item, key) => {
            return key !== draggedFrom;
        });

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

        setList(newList);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false,
        });
    };

    return (
        <Card>
            <div className='flex flex-col items-center'>
                <ul className='flex flex-col w-full'>
                    <AnimatePresence mode='popLayout'>
                        {list.map((item, key) => {
                            return (
                                <motion.li
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.75 }}
                                    className='w-full'
                                    key={key}
                                    draggable='true'
                                    onDragStart={onDragStartHandler}
                                    onDragOver={onDragOverHandler}
                                    onDrop={onDropHandler}
                                    data-position={key}
                                >
                                    <TodoItem item={item} />
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                    <SummaryBar />
                </ul>
            </div>
        </Card>
    );
};

export default TodoList;
