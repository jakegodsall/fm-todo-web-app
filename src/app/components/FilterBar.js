import React from 'react';

import Card from './UI/Card';

const FilterBar = ({ filter, setFilter }) => {
    const labelClass = 'active:text-white';

    const onClickHandler = (e) => {
        setFilter(e.target.innerHTML.toLowerCase());
    };

    return (
        <Card>
            <div className='flex gap-8 font-bold p-8 text-[1.4rem]'>
                <label
                    className={labelClass}
                    onClick={onClickHandler}
                    htmlFor='all'
                    active={filter === 'all'}
                >
                    All
                </label>
                <input type='radio' name='filter' id='all' className='hidden' />
                <label
                    className={labelClass}
                    onClick={onClickHandler}
                    htmlFor='active'
                    active={filter === 'active'}
                >
                    Active
                </label>
                <input type='radio' name='filter' id='active' className='hidden' />
                <label
                    className={labelClass}
                    onClick={onClickHandler}
                    htmlFor='completed'
                    active={filter === 'completed'}
                >
                    Completed
                </label>
                <input type='radio' name='filter' id='completed' className='hidden' />
            </div>
        </Card>
    );
};

export default FilterBar;
