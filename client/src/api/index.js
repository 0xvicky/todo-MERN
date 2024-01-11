import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3232"});

export const getTodosApi = () => API.get("/todos");
export const addTodoApi = todo => API.post("/todos/add", todo);
