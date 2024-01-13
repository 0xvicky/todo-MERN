import * as api from "../api";
import {
  getTodosSlice,
  addTodoSlice,
  updateTodoSlice,
  deleteTodoSlice
} from "../store/todos/todoSlice";

export const getTodosAction = () => async dispatch => {
  try {
    const {data} = await api.getTodosApi();
    dispatch(getTodosSlice(data));
  } catch (error) {
    console.log(JSON.parse(error));
    console.log(`Error occured in actions while fetching all todos:${error}`);
  }
};

export const addTodoAction = todo => async dispatch => {
  try {
    const {data} = await api.addTodoApi(todo);
    dispatch(addTodoSlice(data));
  } catch (error) {
    console.log(`Error occured in add Todo actions:${error}`);
  }
};

export const updateTodoAction = (todoId, todo) => async dispatch => {
  try {
    const {data} = await api.updateTodoApi(todoId, todo);

    dispatch(updateTodoSlice(data));
  } catch (error) {
    console.log(`Error occured while updating todo:${error}`);
  }
};

export const deleteTodoAction = todoId => async dispatch => {
  try {
    const {data} = await api.deleteTodoApi(todoId);
    dispatch(deleteTodoSlice(data));
  } catch (error) {
    console.log(`Error occured while deleting:${error}`);
  }
};
