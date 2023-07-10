import { useContext } from 'react';
import { ListDataContext } from '../contexts/listDataContext';
import { filterActive } from '../utils/filters';

const SummaryBar = () => {
    const { list, setList } = useContext(ListDataContext);

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
    };

    return (
        <div className="mx-[2rem] my-[2.2rem] flex justify-between text-[1.2rem] text-[#9495a5]">
            <p>{incompleteCount} items left</p>
            <p className="cursor-pointer" onClick={clearCompletedHandler}>
                Clear Completed
            </p>
        </div>
    );
};

export default SummaryBar;
