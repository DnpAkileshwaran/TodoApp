import React from "react";
import TodoEntry from "../TodoEntry/TodoEntry";
import TodoDisplay from '../TodoDisplay/TodoDisplay';
import { TodoProvider } from "../Context/TodoContext";

const Todo = () => {
  return (
    <TodoProvider>
      <TodoEntry />
      <TodoDisplay />
    </TodoProvider>
  );
};

export default Todo;
