import React from "react";
import Todo from "./Todo";

const ToDoList = ({ toDos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            toDos={toDos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
