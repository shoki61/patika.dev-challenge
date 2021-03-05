import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import Card from '../../components/UIElements/Card/Card';
import './Auth.css';

const Auth = props => {
    const history = useHistory();
    const [ userName, setUserName ] = useState('');
    const [ error, setError ] = useState(false);

    const inputHandler = event => {
        setUserName(event.target.value);
        if(error) setError(false);
    };

    const login = event => {
        event.preventDefault();
        if(validator.isLength(userName,{ min: 2 })){
            localStorage.setItem('userName', userName);
            history.push('/');
        } else setError(true);
    };

    return <div className='auth'>
        <Card>
            <form onSubmit={login} className='auth-form-container'>
                <p className='auth-title'>Name</p>
                <Input 
                    value={userName}
                    onChange={inputHandler} 
                    className='mb-1'
                    placeholder='enter your full name...' 
                    element='input'
                />
                {error && <p className='error-text mb-1'>Please enter your name</p>}
                <Button onClick={login}>Login</Button>
            </form>
        </Card>
    </div>
};

export default Auth;