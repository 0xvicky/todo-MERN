import mongoose from "mongoose";
import TodoSchema from "../models/todoSchema.js";

export const getTodosCntlr = async (req, res) => {
  try {
    const todos = await TodoSchema.find();
    const userTodos = todos.filter(todo => todo.creator === req.userId);
    res.status(200).json(userTodos);
  } catch (error) {
    res.status(404).json({msg: "Error occured while fetching Todos."});
    console.log(`Error occured in getTodos Func:${error}`);
  }
};
export const addTodosCntlr = async (req, res) => {
  const newTodo = req.body;
  const todo = new TodoSchema(newTodo);

  todo.createdAt = new Date();
  todo.creator = req.userId;
  try {
    todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(404).json({msg: "Error occured while adding."});
    console.log(`Error occured in adding Todo:${error}`);
  }
};

export const updateTodoCntlr = async (req, res) => {
  const {id: _id} = req.params;
  const todo = req.body;
  todo.createdAt = new Date();

  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No Post with this ID!");

  const updatedTodo = await TodoSchema.findByIdAndUpdate(_id, todo, {new: true});
  res.json(updatedTodo);
};

export const deleteTodoCntlr = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No Post with this ID!");

  const deletedTodo = await TodoSchema.findByIdAndDelete(_id);
  res.json(deletedTodo);
};
