'use client';

import { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

import { ListDataContext } from '../contexts/listDataContext';
import Card from './UI/Card';
import TodoItem from './TodoItem';
import SummaryBar from './SummaryBar';

import { filterActive, filterCompleted } from '../utils/filters';

const TodoList = ({ filter }) => {
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [],
    };

    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
    const { list, setList } = useContext(ListDataContext);
    const [filteredList, setFilteredList] = useState(list);

    useEffect(() => {
        if (filter === 'active') {
            setFilteredList(filterActive(list));
        } else if (filter === 'completed') {
            setFilteredList(filterCompleted(list));
        } else {
            setFilteredList(list);
        }
    }, [filter, list]);

    const onDragStartHandler = (e) => {
        // get initial number in the list
        const initialPosition = e.currentTarget.dataset.position;

        // set state as item is being dragged
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: filteredList,
        });

        e.dataTransfer.setData('text/html', '');
    };

    const onDragOverHandler = (e) => {
        e.preventDefault();
    };

    const onDropHandler = (e) => {
        let newList = dragAndDrop.originalOrder;
        console.log(newList);

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

        console.log(newList);

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

        console.log('dragged from', draggedFrom);
        console.log('dragged to', draggedTo);
    };

    return (
        <Card>
            <div className="flex w-full flex-col items-center">
                <ul className="flex w-full flex-col">
                    <AnimatePresence mode="popLayout">
                        {filteredList.map((item, idx) => {
                            console.log(item);
                            return (
                                <motion.li
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.75 }}
                                    className="w-full"
                                    key={item.id}
                                    draggable="true"
                                    onDragStart={onDragStartHandler}
                                    onDragOver={onDragOverHandler}
                                    onDrop={onDropHandler}
                                    data-position={idx}
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
