import React from "react";

const Todo = ({ text, todo, toDos, setTodos }) => {
  const deleteHanlder = () => {
    setTodos(toDos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item${todo.completed ? " completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHanlder} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
    </div>
  );
};

export default Todo;
