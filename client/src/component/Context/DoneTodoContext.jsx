import React,{ useState, createContext } from 'react';

export const DoneTodoContext = createContext();

export const DoneTodoProvider = props => {

  const [ doneTodos, setDoneTodos ] = useState([
    {name: 'akilesh'},
    {name: 'akshitha'},
    {name: 'sanjeevi'}
  ]);

  return(
    <DoneTodoContext.Provider value={[doneTodos,setDoneTodos]}>
      {props.children}
    </DoneTodoContext.Provider>
  )
}
