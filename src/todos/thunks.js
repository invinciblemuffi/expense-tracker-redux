import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const resp = await fetch("http://localhost:3002/api/v1/todo");
    const todos = await resp.json();

    dispatch(loadTodosSuccess(todos.data));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = (name) => async (dispatch) => {
  try {
    const body = JSON.stringify({ name });
    const resp = await fetch("http://localhost:3002/api/v1/todo/createTodo", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body,
    });
    const todo = await resp.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const resp = await fetch(`http://localhost:3002/api/v1/todo/delete/${id}`, {
      method: "delete",
    });
    const removedTodo = await resp.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (msg) => () => {
  alert(`Hello!!! - ${msg}`);
};
