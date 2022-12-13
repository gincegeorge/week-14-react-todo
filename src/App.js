import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // //run once when app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [toDos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(toDos.filter((Todo) => Todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(toDos.filter((Todo) => Todo.completed === false));
        break;
      default:
        setFilteredTodos(toDos);
        break;
    }
  };

  //save to local
  const saveToLocal = () => {
    if (toDos.length > 0) {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
  };

  // //get from local
  const getLocalTodos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        toDos={toDos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
