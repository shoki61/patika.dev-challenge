import React from 'react';


import './Input.css';

const Input = props => {
    let element;
    switch(props.element){
        case 'checkbox': element = <label className="label">{props.label}
            <input
                id={props.id}
                className={`input ${props.className}`} 
                type={props.type} 
                value={props.value} 
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
            <span className="checkmark"></span>
        </label>;
        break;
        case 'input': element = <input
            id={props.id}
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