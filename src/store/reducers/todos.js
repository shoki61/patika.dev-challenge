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
            newTodos.unshift(action.todo);
            const newCategories = [...state.categories];
            newCategories.unshift(action.todo.category);
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
            }
        default: return state;
    };
};

export default reducer;