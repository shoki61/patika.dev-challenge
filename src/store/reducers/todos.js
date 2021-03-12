import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories:[],
    todos:[]
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            const newTodos = [...state.todos];
            if(!action.todo.title){
                action.todo.title = 'Nameless todo'
            }
            newTodos.unshift(action.todo);
            const newCategories = [...state.categories];
            const categoryNames = newCategories.map(item => item.name);
            if(!categoryNames.includes(action.todo.category)){
                newCategories.unshift({name: action.todo.category, isSelected: false});
            };
            return {
                ...state,
                categories: newCategories,
                todos: newTodos
            };

        case actionTypes.DELETE_TODO:
            const updatedTodos = state.todos.filter(item => item.id !== action.id);
            return {
                ...state,
                todos: updatedTodos
            };

        case actionTypes.REMOVE_TODO_ITEM:
            return {
                ...state,
            };
        
        case actionTypes.COPY_TODO:
            const copiedTodo = {...state.todos.find(item => item.id === action.id)};
            copiedTodo.id = uuidv4();
            const newCopiedTodos = [...state.todos];
            newCopiedTodos.unshift(copiedTodo);
            return {
                ...state,
                todos: newCopiedTodos
            };

        case actionTypes.SAVE_UPDATED_TODOS:
            return{
                ...state,
                todos: action.todos
            }    
        default: return state;
    };
};

export default reducer;