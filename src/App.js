import React from "react";
import "./App.css";
import AddTaskForm from "./components/addtaskform/AddTaskForm";
import TodoList from "./components/todolist/TodoList";

function App() {
  return (
    <div className="App">
      <AddTaskForm />
      <TodoList />
    </div>
  );
}

export default App;
