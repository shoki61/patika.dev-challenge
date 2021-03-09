import React from 'react';

import Input from '../FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import Card from '../UIElements/Card/Card';
import './TodoList.css';

const TodoList = props => {
    return <Card key={props.id} className='mr-2 mb-2'>
                <div className='card-item'>
                    <p className='todo-title mb-2 full-width' >{props.title}</p>
                    <div className='todo-items-container full-width'>
                        { props.items.map((item, index)=> <div key={index} className='todo-item-container mb-1'>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Input label={item} element='checkbox' type='checkbox'/>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className='overlay'>
                    <Button className='white full-width'>EDIT</Button>
                    <div>
                        <Button className='white m-1'><i className='fa fa-share-square-o'></i></Button>
                        <Button onClick={props.copy} className='white m-1'><i className='fa fa-copy'></i></Button>
                        <Button onClick={props.delete} className='white m-1'><i className='fa fa-close'></i></Button>
                    </div>
                </div>
            </Card>;
};

export default TodoList;