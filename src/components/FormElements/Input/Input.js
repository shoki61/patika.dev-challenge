import React from 'react';


import './Input.css';

const Input = props => {
    let element;
    switch(props.element){
        case 'input': element = <input 
            type={props.type} 
            value={props.value} 
            placeholder={props.placeholder} 
            onChange={props.onChange}
        />;
        break;
        default: element = <textarea
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    };

    return element;
};

export default Input;