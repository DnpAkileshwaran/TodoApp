import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const DoneTodoContext = createContext();

export const DoneTodoProvider = props => {
  const [doneTodos, setDoneTodos] = useState([]);

  useEffect(() => {
    async function getDoneTodos() {
      try {
        const res = await axios.get("http://localhost:5000/api/doneTodos");
        setDoneTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getDoneTodos();
  },[setDoneTodos]);

  return (
    <DoneTodoContext.Provider value={[doneTodos, setDoneTodos]}>
      {props.children}
    </DoneTodoContext.Provider>
  );
};
