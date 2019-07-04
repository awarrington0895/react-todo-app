import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as todoActions from "../redux/actions/todoActions";

import AddTodo from "./AddTodo";

const TodoList = ({
  todos,
  toggleCompleted,
  removeTodo,
  addTodo,
  ...props
}) => {
  const todoList = {
    display: "flex",
    flexDirection: "column"
  };

  // const generateTodos = todosForGen => {
  //   return todosForGen.map(todo => {
  //     return (
  //       <div style={{ marginBottom: 10 }}>
  //         <Todo
  //           todo={todo}
  //           handleComplete={toggleCompleted}
  //           handleDelete={removeTodo}
  //         />
  //       </div>
  //     );
  //   });
  // };

  return (
    <div style={todoList}>
      <h2>Todo list</h2>
      {todos.map(todo => {
        return (
          <div style={{ marginBottom: 10 }}>
            <Todo
              key={`todo-${todo.id}`}
              todo={todo}
              handleComplete={toggleCompleted}
              handleDelete={removeTodo}
            />
          </div>
        );
      })}
      <AddTodo onSubmit={addTodo} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  toggleCompleted: todoActions.toggleTodo,
  removeTodo: todoActions.removeTodo,
  addTodo: todoActions.addTodo
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
