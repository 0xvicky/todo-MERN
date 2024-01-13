import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3232"});

export const getTodosApi = () => API.get("/todos");
export const addTodoApi = todo => API.post("/todos/add", todo);
export const updateTodoApi = (todoId, todo) => API.patch(`/todos/update/${todoId}`, todo);
export const deleteTodoApi = todoId => API.delete(`/todos/delete/${todoId}`);

export const signUpApi = userData => API.post("/user/signUp", userData);
