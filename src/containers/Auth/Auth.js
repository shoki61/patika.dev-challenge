import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import Card from '../../components/UIElements/Card/Card';
import './Auth.css';

const Auth = props => {
    const history = useHistory();
    const [ user, setUser ] = useState({firstName:'', lastName:''});
    const [ error, setError ] = useState(false);

    const inputHandler = event => {
        setUser(prevState => {
            return{
                ...prevState,
                [event.target.id]: event.target.value
            };
        });
        if(error) setError(false);
    };

    const login = event => {
        event.preventDefault();
        if(validator.isLength(user.firstName,{ min: 2 }) && validator.isLength(user.lastName,{ min: 2 })){
            localStorage.setItem('user', JSON.stringify(user));
            return history.push('/');
        };
        setError(true);
    };

    return <div className='auth'>
        <Card>
            <form onSubmit={login} className='auth-form-container'>
                <p className='auth-title'>First Name</p>
                <Input 
                    id='firstName'
                    value={user.firstName}
                    onChange={inputHandler} 
                    className='mb-1'
                    placeholder='enter your first name...' 
                    element='input'
                />
                <p className='auth-title'>Last Name</p>
                <Input 
                    id='lastName'
                    value={user.lastName}
                    onChange={inputHandler} 
                    className='mb-1'
                    placeholder='enter your last name...' 
                    element='input'
                />
                {error && <p className='error-text mb-1'>Please enter your name</p>}
                <Button onClick={login}>Login</Button>
            </form>
        </Card>
    </div>
};

export default Auth;