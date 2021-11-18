import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onMarkComplete }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => (
      <TodoListItem
        key={i * Math.random()}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkComplete={onMarkComplete}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkComplete: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
