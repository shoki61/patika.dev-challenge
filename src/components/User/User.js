import React from 'react';


import avatar from '../../assets/user-avatar.png';
import './User.css';

const User = props => (
    <div className='user'>
        <img className='user-avatar' src={avatar} alt='user'/>
        { props.user && <p className='user-name ml-1'>{props.user.firstName} <br/> {props.user.lastName}</p> }
    </div>
);

export default User;