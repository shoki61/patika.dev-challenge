import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories:[],
    todos:[]
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO: return {
            ...state,
            categories: state.categories.push(action.category),
            todos: state.todos.push(action.todo)
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
        default: return state;
    };
};

export default reducer;