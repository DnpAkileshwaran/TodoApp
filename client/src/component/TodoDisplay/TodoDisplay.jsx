import React, { useState, useContext } from "react";
import TodoRemaining from "../TodoRemaining/TodoRemaining";
import TodoDone from "../TodoDone/TodoDone";
import { DoneTodoProvider } from "../Context/DoneTodoContext";
import { Button } from "reactstrap";
import { TodoContext } from "../Context/TodoContext";
import "./TodoDisplay.css";

const TodoDisplay = () => {

  const [todos, setTodos] = useContext(TodoContext);

  const [isPreview, setIsPreview] = useState(true);

  if (isPreview) {
    return (
      <div>
        <DoneTodoProvider>
          <TodoRemaining />
          <div className="nav-bar">
            <Button onClick={() => setIsPreview(true)}>
              Todos Remaining : {todos.length}
            </Button>
            <Button onClick={() => setIsPreview(false)}>
              Todos Done : 
            </Button>
          </div>
        </DoneTodoProvider>
      </div>
    );
  } else {
    return (
      <div>
        <DoneTodoProvider>
          <TodoDone />
          <div className="nav-bar">
            <Button onClick={() => setIsPreview(false)}>
              Todos Done : 
            </Button>
            <Button onClick={() => setIsPreview(true)}>
              Todos Remaining: {todos.length}
            </Button>
          </div>
        </DoneTodoProvider>
      </div>
    );
  }
};

export default TodoDisplay;
