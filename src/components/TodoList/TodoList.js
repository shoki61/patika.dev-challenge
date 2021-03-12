import React, { useState } from 'react';

import Input from '../FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import Card from '../UIElements/Card/Card';
import './TodoList.css';

const TodoList = props => {
    const [isUpdate, setIsUpdate] = useState(false);

    const saveTodo = () => {
        props.saveUpdateTodos();
        setIsUpdate(false)
    }
    return <Card key={props.id} className='mr-2 mb-2'>
                <div className='card-item'>
                    {isUpdate ? <Input 
                        element='input'
                        id='title' 
                        onChange={(event) => props.updateTodo(event, props.id, props.index)}
                        className='todo-title mb-2 full-width' 
                        value={props.title}
                    /> : 
                    <p className='todo-title mb-2 full-width' >{props.title}</p>
                    }

                    <div className='todo-items-container full-width'>
                        { props.items.map((item, index)=> <div key={index} className='todo-item-container mb-1'>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Input 
                                    onChange={(event) => props.updateTodo(event, props.id, props.index, index)}
                                    label={item.name} 
                                    value={item.status} 
                                    checked={item.status} 
                                    element='checkbox' 
                                    type='checkbox'
                                    id='items'
                                />
                            </div>
                        </div>)}
                    </div>
                    {isUpdate && <Button onClick={saveTodo} className='full-width m-1'>SAVE</Button>}
                </div>
                {!isUpdate && <div className='overlay'>
                    <Button onClick={() => setIsUpdate(true)} className='white full-width'>EDIT</Button>
                    <div>
                        <Button className='white m-1'><i className='fa fa-share-square-o'></i></Button>
                        <Button onClick={props.copy} className='white m-1'><i className='fa fa-copy'></i></Button>
                        <Button onClick={props.delete} className='white m-1'><i className='fa fa-close'></i></Button>
                    </div>
                </div>}
            </Card>;
};

export default TodoList;