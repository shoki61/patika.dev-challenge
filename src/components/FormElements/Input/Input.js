import React from 'react';


import './Input.css';

const Input = props => {
    let element;
    switch(props.element){
        case 'input': element = <input
            className={`input ${props.className}`} 
            type={props.type} 
            value={props.value} 
            placeholder={props.placeholder} 
            onChange={props.onChange}
        />;
        break;
        default: element = <textarea
            className={`input ${props.className}`}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    };

    return element;
};

export default Input;