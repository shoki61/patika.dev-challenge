import * as actionTypes from './actionTypes';

export const addTodo = todo => {
    return {
        type: actionTypes.ADD_TODO,
        todo
    };
};

export const deleteTodo = id => {
    return {
        type: actionTypes.DELETE_TODO,
        id
    };
};

export const removeTodoItem = id => {
    return {
        type: actionTypes.REMOVE_TODO_ITEM,
        id
    };
};

export const copyTodo = id => {
    return {
        type: actionTypes.COPY_TODO,
        id
    };
};
