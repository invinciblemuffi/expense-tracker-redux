import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { completeTodo } from "./actions";
import { loadTodos, removeTodoRequest } from "./thunks";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkComplete,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMsg = <div>Loading todos...</div>;
  const content = (
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
  return isLoading ? loadingMsg : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  // onRemovePressed: (text) => dispatch(removeTodo(text)),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkComplete: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
