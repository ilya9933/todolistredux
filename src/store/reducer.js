import { SET_TODOS, ADD_TODO } from './actionTypes';

const getInjitialState = () => ({
  todos: [],
});

export default (state = getInjitialState(), action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.data,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.data]
      };

    default:
      return state;
  }
};
