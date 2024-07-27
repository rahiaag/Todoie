import React from "react";
import Header from "./Components/header";
import TodoItem from "./Components/TodoItem";
import Button from "./Components/Button";

import CounterComponent from "./Components/CounterComponent";

import "./style.css";
const App=()=>{
  return (
    <div className="todo-container">
      <CounterComponent/>
      <Header text="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Repeat"/>
      <Button/>
    </div>

  )
};

export default App;