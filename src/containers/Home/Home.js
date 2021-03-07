import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


import User from '../../components/User/User';
import Card from '../../components/UIElements/Card/Card';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import * as actions from '../../store/actions/index';
import './Home.css';

const Home = props => {
    const [ todoList, setTodoList ] = useState(props.todos);
    const [ todo, setTodo ] = useState({
        id: uuidv4(),
        title:'',
        category:'',
        item:'',
        items:[]
    });

    const createTodo = () => {
        setTodoList()
    };
    
    return <div className='home'>
        <div className='home-left'>
            <User/>
        </div>
        <div className='home-right'>
            {todoList.map(item => <Card className='mr-2 mb-2'>
                <div className='card-item ml-1'>
                    <Input className='card-title-input mb-2 full-width' element='input' value={todo.title} placeholder='enter title...'/>
                    <div className='todo-item-container mb-2'>
                        <Input className='card-item-input full-width' element='input' value={todo.item} placeholder='enter todo...'/>
                        <Button className='card-add-item-button'>Add</Button>
                    </div>
                    <div className='todo-items-container full-width'>
                        {todoList.map(item => <div className='todo-item-container mb-1'>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Input label='My to do' element='checkbox' type='checkbox'/>
                            </div>
                            <Button className='danger'><i className='fa fa-close'></i></Button>
                        </div>)}
                    </div>
                </div>
            </Card>)}
            <Card>
                <div className='card-item create-card-item'>
                    <p className='card-title'>New Project</p>
                    <Button onClick={createTodo} className='outline full-width'>Create</Button>
                </div>
            </Card>
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: () => dispatch(actions.addTodo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);