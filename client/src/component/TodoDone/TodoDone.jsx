import React, { useContext } from "react";
import axios from "axios";
import { MdRestore } from "react-icons/md";
import { DoneTodoContext } from "../Context/DoneTodoContext";
import { TodoContext } from "../Context/TodoContext";
import "./TodoDone.css";

const TodoDone = () => {
  const [doneTodos, setDoneTodos] = useContext(DoneTodoContext);

  const [todos, setTodos] = useContext(TodoContext);

  const restoreDoneTodo = id => {
    axios.delete("http://localhost:5000/api/doneTodos/" + id).then(res => {
      const todo = doneTodos.filter(doneTodo => doneTodo._id == id)[0].doneTodo;
      axios
        .post("http://localhost:5000/api/todos", { todo: todo })
        .then(res => {
          setTodos([...todos, res.data]);
        })
        .catch(err => console.log(err));
      setDoneTodos(doneTodos.filter(doneTodos => doneTodos._id != id));
    });
  };

  const deleteAll = () => {
    const verify = prompt("Sure Wanna Continue (yes/no)");

    if (verify === "yes") {
      doneTodos.map(doneTodo => {
        const id = doneTodo._id;
        setDoneTodos([]);
        try {
          axios
            .delete("http://localhost:5000/api/doneTodos/" + id)
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log(err));
        } catch (err) {
          console.log(err);
        }
      });
    }
  };

  return (
    <div className="todo-content">
      <div className="todo-display">
        {doneTodos.map(doneTodo => (
          <div className="todo-list" key={doneTodo._id}>
            {doneTodo.doneTodo}
            <MdRestore onClick={() => restoreDoneTodo(doneTodo._id)} />
          </div>
        ))}
      </div>
      <button onClick={deleteAll}>Clear All</button>
    </div>
  );
};

export default TodoDone;
