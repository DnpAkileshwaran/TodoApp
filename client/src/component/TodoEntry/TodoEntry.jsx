import React, { useContext, useState } from "react";
import axios from 'axios';
import { TodoContext } from "../Context/TodoContext";

const TodoEntry = () => {

  const [ todos,setTodos ] = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const addTodo = e => {
    e.preventDefault();
    try {
      axios
        .post('http://localhost:5000/api/todos', {todo:todo})
        .then( res => {
          setTodos([...todos, res.data]);
        } )
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          placeholder="Enter Todo"
          type="text"
          onChange={e => setTodo(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
   </div>
  );
};

export default TodoEntry;
