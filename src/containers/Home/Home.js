import React from 'react';


import User from '../../components/User/User';
import Card from '../../components/UIElements/Card/Card';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import './Home.css';

const Home = props => {
    return <div className='home'>
        <div className='home-left'>
            <User/>
        </div>
        <div className='home-right'>
            <Card>
                <div className='card-item create-card-item'>
                    <p className='card-title'>New Project</p>
                    <Button className='outline full-width'>Create</Button>
                </div>
            </Card>
        </div>
    </div>
};

export default Home;