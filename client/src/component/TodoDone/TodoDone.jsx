import React,{ useContext } from 'react';
import { DoneTodoContext } from '../Context/DoneTodoContext';

const TodoDone = () => {

  const [doneTodos, setDoneTodos] = useContext(DoneTodoContext);

  return(
    <div>
      <button onClick={ () => console.log(doneTodos) } >click</button>
    </div>
  );
}

export default TodoDone;
