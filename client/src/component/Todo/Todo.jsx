import React from "react";
import TodoEntry from "../TodoEntry/TodoEntry";
import TodoDisplay from "../TodoDisplay/TodoDisplay";
import { TodoProvider } from "../Context/TodoContext";
import { DoneTodoProvider } from "../Context/DoneTodoContext";

const Todo = () => {
  return (
    <TodoProvider>
      <TodoEntry />
      <DoneTodoProvider>
        <TodoDisplay />
      </DoneTodoProvider>
    </TodoProvider>
  );
};

export default Todo;
