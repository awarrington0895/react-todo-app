import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
