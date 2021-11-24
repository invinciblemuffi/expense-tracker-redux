import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onMarkComplete }) => (
  <div className="todo-item-container">
    <h3>{todo.todoName}</h3>
    <div className="buttons-container">
      {todo.isCompleted ? null : (
        <button
          className="completed-button"
          onClick={() => onMarkComplete(todo.text)}
        >
          Mark As Completed
        </button>
      )}
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
