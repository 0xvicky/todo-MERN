import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  currentId: null,
  isChange: false,
  storageChange: false
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosSlice(state, action) {
      state.todoList = action.payload;
    },
    addTodoSlice(state, action) {
      state.todoList.push(action.payload);
    },
    updateTodoSlice(state, action) {
      state.todoList.map(todo =>
        todo._id === action.payload._id ? action.payload : todo
      );
      state.isChange = !state.isChange;
    },
    deleteTodoSlice(state, action) {
      state.todoList.filter(todo => todo._id === action.payload);
      state.isChange = !state.isChange;
    },
    logoutSlice(state) {
      localStorage.removeItem("user");
      state.todoList = [];
    },
    setCurrentId(state, action) {
      state.currentId = action.payload;
    },
    setStorageChange(state) {
      state.storageChange = !state.storageChange;
    }
  }
});

export const {
  addTodoSlice,
  getTodosSlice,
  updateTodoSlice,
  deleteTodoSlice,
  setCurrentId,
  setStorageChange,
  logoutSlice
} = todoSlice.actions;
export default todoSlice.reducer;
