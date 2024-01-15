import axios from "axios";

const API = axios.create({baseURL: process.env.VITE_REACT_APP_PORT});

API.interceptors.request.use(req => {
  const user = localStorage.getItem("user");
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  }
  return req;
});

export const getTodosApi = () => API.get("/todos");
export const addTodoApi = todo => API.post("/todos/add", todo);
export const updateTodoApi = (todoId, todo) => API.patch(`/todos/update/${todoId}`, todo);
export const deleteTodoApi = todoId => API.delete(`/todos/delete/${todoId}`);

export const signUpApi = userData => API.post("/user/signUp", userData);
export const signInApi = userData => API.post("/user/signIn", userData);
