import React,{ useContext } from 'react';
import axios from 'axios';
import { AiFillCheckCircle } from 'react-icons/ai';
import { TodoContext } from '../Context/TodoContext';
import { DoneTodoContext } from '../Context/DoneTodoContext';
import './TodoRemaining.css';

const TodoRemaining = () => {

  const [ doneTodos, setDoneTodos ] = useContext(DoneTodoContext);

  const [todos,setTodos] = useContext(TodoContext);

  const addDoneTodo = doneTodo => {
    axios
      .post('http://localhost:5000/api/doneTodos', { doneTodo: doneTodo })
      .then( res => {
        setDoneTodos([...doneTodos, res.data]);
      } )
      .catch( err => console.log(err) )
  };

  const deleteTodo = id => {
    try {
      axios
        .delete('http://localhost:5000/api/todos/' + id)
        .then( res => {
          todos.map( todo => {
            if (todo._id === id) {
              addDoneTodo(todo.todo);
            }
          } );
          setTodos(todos.filter(todo => todo._id !== id));
        } )
    } catch(err) {
      console.log(err);
    }
  }

  return(
    <div className="todo-display">
      {todos.map(todo => (
        <div className="todo-list" key={todo._id} >
          {todo.todo}
          <AiFillCheckCircle
            onClick={() => deleteTodo(todo._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoRemaining;
