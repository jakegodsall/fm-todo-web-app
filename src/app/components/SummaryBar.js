import { useContext } from 'react';
import { ListDataContext } from '../contexts/listDataContext';
import { filterActive } from '../utils/filters';
import { FilterContext } from '../contexts/filterContext';

const SummaryBar = () => {
    const { list, setList } = useContext(ListDataContext);
    const { filter, setFilter } = useContext(FilterContext);

    const incompleteCount = list.reduce((acc, val) => {
        if (!val.complete) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const clearCompletedHandler = () => {
        setList((prevState) => {
            return filterActive(prevState);
        });

        setFilter('all');
    };

    return (
        <div className="mx-[2rem] my-[2.2rem] flex justify-between text-[1.2rem] text-secondary">
            <p>{incompleteCount} items left</p>
            <p className="cursor-pointer" onClick={clearCompletedHandler}>
                Clear Completed
            </p>
        </div>
    );
};

export default SummaryBar;
