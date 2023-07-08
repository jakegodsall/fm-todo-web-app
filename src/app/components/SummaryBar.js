import { useContext } from 'react';
import { ListDataContext } from '../contexts/listDataContext';

const SummaryBar = () => {
    const { list, setList } = useContext(ListDataContext);

    const incompleteCount = list.reduce((acc, val) => {
        if (!val.complete) {
            console.log(val, !val.complete);
            return acc + 1;
        }
        return acc;
    }, 0);

    console.log('count', incompleteCount);

    const clearCompletedHandler = () => {};

    return (
        <div className='flex justify-between text-[1.2rem] text-[#9495a5] mx-[2rem] my-[2.2rem]'>
            <p>{incompleteCount} items left</p>
            <p onClick={clearCompletedHandler}>Clear Completed</p>
        </div>
    );
};

export default SummaryBar;
