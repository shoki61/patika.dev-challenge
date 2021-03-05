import React from 'react';

import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import './Auth.css';

const Auth = props => {
    return <div>
        <Input element='input'/>
        <Button>Login</Button>
    </div>
};

export default Auth;