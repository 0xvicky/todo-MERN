import mongoose from "mongoose";
import TodoSchema from "../models/todoSchema.js";

export const getTodosCntlr = async (req, res) => {
  try {
    const todos = await TodoSchema.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({msg: "Error occured while fetching Todos."});
    console.log(`Error occured in getTodos Func:${error}`);
  }
};
export const addTodosCntlr = async (req, res) => {
  const newTodo = req.body;
  const todo = new TodoSchema(newTodo);

  todo.createdAt = new Date();
  try {
    todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(404).json({msg: "Error occured while adding."});
    console.log(`Error occured in adding Todo:${error}`);
  }
};
