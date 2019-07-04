import * as types from "../actions/actionTypes";
import initialState from "./initialState";

let currentTodoId = 2;
const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case types.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case types.ADD_TODO:
      let todo = {
        id: ++currentTodoId,
        text: action.text,
        completed: false
      };

      return [...state, todo];
    default:
      return state;
  }
};

export default todoReducer;
