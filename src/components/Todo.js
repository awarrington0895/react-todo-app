import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "./todo.scss";

const Todo = ({ todo, handleComplete, handleDelete, ...props }) => {
  const toggle = () => {
    handleComplete(todo.id);
  };

  const remove = () => {
    handleDelete(todo.id);
  };

  return (
    <Paper
      style={{ backgroundColor: todo.completed ? "lightgrey" : "" }}
      className="todo"
    >
      <Checkbox checked={todo.completed} onClick={toggle} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
      <Button onClick={remove}>
        <DeleteIcon color="error" />
      </Button>
    </Paper>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Todo;
