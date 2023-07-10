import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="mx-[2.4rem] my-8 flex justify-center rounded-[5px] bg-primary shadow-xl">
            {children}
        </div>
    );
};

export default Card;
