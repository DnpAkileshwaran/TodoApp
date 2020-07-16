import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = props => {

  const [ todos, setTodos ] = useState([]);
  useEffect( () => {
    async function getTodos() {
      try {
        const res = await axios.get('http://localhost:5000/api/todos');
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getTodos();
  },[setTodos] );

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
