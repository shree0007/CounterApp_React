import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button className='button' onClick={props.myAwesomeEvent}>{props.text}</button>
    );
};

export default Button;