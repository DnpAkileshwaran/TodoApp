import React,{ useContext } from 'react';
import axios from 'axios';
import { BsTrash } from 'react-icons/bs';
import { TodoContext } from '../Context/TodoContext';

const TodoRemaining = () => {

  const [todos,setTodos] = useContext(TodoContext);

  const deleteTodo = id => {
    try {
      axios
        .delete('http://localhost:5000/api/todos/' + id)
        .then( res => {
          setTodos(todos.filter(todo => todo._id !== id));
        } )
    } catch(err) {
      console.log(err);
    }
  }

  return(
    <div>
      {todos.map(todo => (
        <div key={todo._id} >
          {todo.todo}
          <BsTrash
            onClick={() => deleteTodo(todo._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoRemaining;
