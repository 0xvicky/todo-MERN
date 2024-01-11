import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todoList: []
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
    }
  }
});

export const {addTodoSlice, getTodosSlice} = todoSlice.actions;
export default todoSlice.reducer;
