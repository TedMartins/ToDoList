/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const styles = {
  isCompleted: {
    textDecoration: 'line-through',
  },
  notCompleted: {
    textDecoration: 'none',
  }
}

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <>
      <div className="todo" style={todo.isCompleted ? styles.isCompleted : styles.notCompleted}>
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
