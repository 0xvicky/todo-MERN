import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  currentId: null,
  isChange: false
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
      state.isChange = !state.isChange;
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
    setCurrentId(state, action) {
      state.currentId = action.payload;
    }
  }
});

export const {
  addTodoSlice,
  getTodosSlice,
  updateTodoSlice,
  deleteTodoSlice,
  setCurrentId
} = todoSlice.actions;
export default todoSlice.reducer;
