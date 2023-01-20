import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({string}) => {
    return (
        <button className={cl.myButton}>
            {string}
        </button>
    );
};

export default MyButton;