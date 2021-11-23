import React, { useState } from "react";
// import { createTodo } from "./actions";
import { addTodoRequest } from "./thunks";
import { connect } from "react-redux";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputVal, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputVal}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === inputVal);
          !isDuplicateText && (onCreatePressed(inputVal), setInputValue(""));
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // onCreatePressed: (text) => dispatch(createTodo(text)),
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
