import React from 'react';

import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import Card from '../../components/UIElements/Card/Card';
import './Auth.css';

const Auth = props => {
    return <div className='auth'>
        <Card>
            <div className='auth-form-container'>
                <p className='auth-title'>Name</p>
                <Input className='mb-1' placeholder='enter your full name...' element='input'/>
                <Button>Login</Button>
            </div>
        </Card>
    </div>
};

export default Auth;