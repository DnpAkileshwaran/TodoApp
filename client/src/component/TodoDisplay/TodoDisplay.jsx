import React, { useState, useContext } from "react";
import TodoRemaining from "../TodoRemaining/TodoRemaining";
import TodoDone from "../TodoDone/TodoDone";
import { Button } from "reactstrap";
import { TodoContext } from "../Context/TodoContext";
import { DoneTodoContext } from "../Context/DoneTodoContext";
import "./TodoDisplay.css";

const TodoDisplay = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const [doneTodos, setDoneTodos] = useContext(DoneTodoContext);

  const [isPreview, setIsPreview] = useState(true);

  if (isPreview) {
    return (
      <div className="todo-block">
        <TodoRemaining />
        <div className="nav-bar">
          <p 
            style={{color: "red"}}
            onClick={() => setIsPreview(true)}>
            Todos Remaining: {todos.length}
          </p>
          <p onClick={() => setIsPreview(false)}>
            Todo Done: {doneTodos.length}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo-block">
        <TodoDone />
        <div className="nav-bar">
          <p onClick={() => setIsPreview(true)}>
            Todos Remaining: {todos.length}
          </p>
          <p
            style={{color: "red"}}
            onClick={() => setIsPreview(false)}>
            Todo Done: {doneTodos.length}
          </p>
        </div>
      </div>
    );
  }
};

export default TodoDisplay;
