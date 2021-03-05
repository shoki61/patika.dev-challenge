import React, { useEffect, useState } from 'react';


import avatar from '../../assets/user-avatar.png';
import './User.css';

const User = props => {
    const [ userName, setUserName ] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        setUserName(name);
    }, []);

    return <div className='user'>
        <img className='user-avatar' src={avatar} alt='image'/>
        <p className='user-name ml-1'>{userName}</p>
    </div>;
};

export default User;