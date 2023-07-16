import { useContext } from 'react';

import Card from './UI/Card';
import { FilterContext } from '../contexts/filterContext';

const FilterBar = () => {
    const { filter, setFilter } = useContext(FilterContext);

    const onClickHandler = (e) => {
        setFilter(e.target.innerHTML.toLowerCase());
    };

    return (
        <Card>
            <div
                className={
                    'flex gap-8 p-8 text-[1.4rem] font-bold text-secondary'
                }
            >
                <label
                    className={
                        filter === 'all'
                            ? 'cursor-pointer text-[#3A7CFD] '
                            : 'cursor-pointer'
                    }
                    onClick={onClickHandler}
                    htmlFor="all"
                >
                    All
                </label>
                <input type="radio" name="filter" id="all" className="hidden" />
                <label
                    className={
                        filter === 'active'
                            ? 'cursor-pointer text-[#3A7CFD]'
                            : 'cursor-pointer'
                    }
                    onClick={onClickHandler}
                    htmlFor="active"
                >
                    Active
                </label>
                <input
                    type="radio"
                    name="filter"
                    id="active"
                    className="hidden"
                />
                <label
                    className={
                        filter === 'completed'
                            ? 'cursor-pointer text-[#3A7CFD]'
                            : 'cursor-pointer'
                    }
                    onClick={onClickHandler}
                    htmlFor="completed"
                >
                    Completed
                </label>
                <input
                    type="radio"
                    name="filter"
                    id="completed"
                    className="hidden"
                />
            </div>
        </Card>
    );
};

export default FilterBar;
