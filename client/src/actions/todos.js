import * as api from "../api";
import {getTodosSlice, addTodoSlice} from "../store/todos/todoSlice";

export const getTodosAction = () => async dispatch => {
  try {
    const {data} = await api.getTodosApi();
    dispatch(getTodosSlice(data));
  } catch (error) {
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
