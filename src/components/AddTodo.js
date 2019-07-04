import React, { useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";

const AddTodo = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onSubmit(input);
    setInput("");
  };

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  const handleKeyUp = event => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <TextField
        onChange={handleInputChange}
        value={input}
        style={{ marginRight: 10 }}
        onKeyUp={handleKeyUp}
      />
      <Button onClick={handleSubmit}>Add todo</Button>
    </div>
  );
};

export default AddTodo;
