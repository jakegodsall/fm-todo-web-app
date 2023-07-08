import React from 'react';

const Card = ({ children }) => {
    return (
        <div className='bg-primary rounded-[5px] mx-[2.4rem] my-8 shadow-xl flex justify-center'>
            {children}
        </div>
    );
};

export default Card;
