import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


import User from '../../components/User/User';
import Card from '../../components/UIElements/Card/Card';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import TodoList from '../../components/TodoList/TodoList';
import * as actions from '../../store/actions/index';
import './Home.css';

const Home = props => {
    const history = useHistory();
    const [ user, setUser ] = useState();
    const [ newTodo, setNewTodo ] = useState(false);
    const [ category, setCategory ] = useState(true);
    const [ categories, setCategories ] = useState([]);
    const [ todo, setTodo ] = useState({
        id: uuidv4(),
        title:'',
        category:'',
        item:'',
        items:[]
    });


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            return history.push('/auth');
        };
        setUser(user);
        setCategories(props.categories);
    }, [props.categories, categories]);


    const addTodo = () => {
        props.onAddTodo(todo);
        setNewTodo(false);
        setCategory(true);
        setTodo({
            id: uuidv4(),
            title:'',
            category:'',
            item:'',
            items:[]
        });
    };

    const changeNewTodo = () => {
        setNewTodo(prevState => !prevState);
        if(!newTodo){
            setCategory(true)
            setTodo({
                id: uuidv4(),
                title:'',
                category:'',
                item:'',
                items:[]
            })
        };
    };

    const inputHandler = event => {
        setTodo(prevState => {
            return {
                ...prevState,
                [event.target.id]: event.target.value
            };
        });
    };

    const setCategoryHandler = () => {
        if(todo.category.length) setCategory(false);
    };

    const addTodoItem = () => {
        let items = todo.items;
        items.unshift(todo.item);
        setTodo(prevState => {
            return {
                ...prevState,
                items,
                item:''
            };
        });
    };

    const removeItem = i => {
        const updateItems = todo.items.filter((item, index) => index !== i);
        setTodo(prevState => {
            return {
                ...prevState,
                items: updateItems
            };
        });
    };
    

    const deleteTodo = id => {
        props.onDeleteTodo(id);
    };

    const copy = id => {
        props.onCopy(id);
    };

    const getFilteredTodos = (event ,value) => {
        const updatedCategories = categories.map(item => {
            if(item.name === value){
                item.isSelected = !item.isSelected
                return item;
            };
            return item;
        });
        setCategories(updatedCategories);
    };


    const renderTodos = item => {
        const isSelectedCategory = categories.filter(ctgs => ctgs.isSelected === true);
        if(isSelectedCategory.length > 0){
            let filteredTodos;
            isSelectedCategory.map(ctg => {
                if(ctg.name === item.category){
                    filteredTodos = <TodoList
                        id={item.id}
                        key={item.id}
                        delete={() => deleteTodo(item.id)}
                        copy={() => copy(item.id)}
                        title={item.title}
                        items={item.items}
                        category={item.category}
                    />;
                };
            });
            return filteredTodos;
        }else{
            return <TodoList
                id={item.id}
                key={item.id}
                delete={() => deleteTodo(item.id)}
                copy={() => copy(item.id)}
                title={item.title}
                items={item.items}
                category={item.category}
            />;
        };
    };

    return <div className='home'>
        <div className='home-left'>
            <User user={user}/>
            <div className='categories-container mt-3 m-1'>
                {
                    categories.map((item, index) => <p key={index} className='mt-1'>
                        <Input 
                            onChange={(event) => getFilteredTodos(event, item.name)} 
                            checked={item.isSelected} 
                            value={item.isSelected}  
                            label={item.name} 
                            element='checkbox' 
                            type='checkbox' 
                        />
                    </p>
                )}
            </div>
        </div>
        <div className='home-right'>
            {props.todos.length > 0 && props.todos.map(item => renderTodos(item))}

            {
                newTodo && <Card className='mr-2 mb-2'>
                    <Button onClick={changeNewTodo} className='card-close'><i className='fa fa-close'></i></Button>
                    {category ? <div className='card-item create-card-item'>
                        <Input
                            onChange={inputHandler} 
                            id='category' 
                            className='full-width' 
                            element='input' 
                            value={todo.category} 
                            placeholder='enter category...' 
                        />
                        <Button onClick={setCategoryHandler}>Next</Button>
                    </div> :
                    <div className='card-item'>
                        <Input 
                            onChange={inputHandler} 
                            id='title' 
                            className='card-title-input mb-2 full-width' 
                            element='input' 
                            value={todo.title} 
                            placeholder='enter title...'
                        />
                        <div className='todo-item-container mb-2'>
                            <Input 
                                onChange={inputHandler} 
                                id='item' 
                                className='card-item-input full-width' 
                                element='input' 
                                value={todo.item} 
                                placeholder='enter todo...'
                            />
                            <Button onClick={addTodoItem} className='card-add-item-button'>Add</Button>
                        </div>
                        <div className='todo-items-container full-width'>
                            { todo.items.map((item, index)=> <div key={index} className='todo-item-container mb-1'>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <Input label={item} element='checkbox' type='checkbox'/>
                                </div>
                                <Button onClick={() => removeItem(index)}  className='danger'><i className='fa fa-close'></i></Button>
                            </div>)}
                        </div>
                        {todo.items.length > 0 && <Button onClick={addTodo} className='full-width m-1'>SAVE</Button>}
                    </div>}
                </Card>
            }

            <Card>
                <div className='card-item create-card-item'>
                    <p className='card-title'>New Project</p>
                    <Button disabled={newTodo} onClick={changeNewTodo} className='outline full-width'>Create</Button>
                </div>
            </Card>
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        categories: state.todoReducer.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: todo => dispatch(actions.addTodo(todo)),
        onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
        onCopy: id => dispatch(actions.copyTodo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);