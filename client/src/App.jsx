import React from "react";
import "./App.css";
import Todo from './component/Todo/Todo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO</h3>
        <Todo />
      </header>
    </div>
  );
};

export default App;
