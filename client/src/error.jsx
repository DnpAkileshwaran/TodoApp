import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import "./TodoEntry.css";

const TodoEntry = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getTodos();
  }, [setTodos]);

  const addTodo = e => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/api/todos", { todo: todo })
        .then(res => {
          setTodos([...todos, res.data]);
        });
    } catch (err) {
      console.log(err);
    }

  };

  const deleteTodo = id => {
    console.log("inside delete");
    try {
      axios.delete("http://localhost:5000/api/todos/" + id).then(res => {
        setTodos(todos.filter(todo => todo._id !== id));
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo-content">
      <form id="form-input" onSubmit={addTodo}>
        <input
          placeholder="Enter todo"
          type="text"
          onChange={e => setTodo(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
      <todoRemaining />
      <todoDone />
      {todos.map(todo => (
        <div className="todo-list" key={todo._id}>
          {todo.todo}
          <BsTrash
            className="delete-btn"
            onClick={() => deleteTodo(todo._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoEntry;


