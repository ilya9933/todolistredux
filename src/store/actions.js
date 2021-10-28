import { SET_TODOS, ADD_TODO } from './actionTypes';

export const setTodos = (data) => ({ type: SET_TODOS, data });

export const addTodo = (data) => ({ type: ADD_TODO, data });
