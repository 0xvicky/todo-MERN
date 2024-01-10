import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todoList: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    }
  }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
