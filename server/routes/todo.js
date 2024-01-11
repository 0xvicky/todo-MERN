import express from "express";
import {getTodosCntlr, addTodosCntlr} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/", getTodosCntlr);
router.post("/add", addTodosCntlr);
// router.patch("/update/:id", updateTodo);
// router.delete("/delete/:id", deleteTodo);

export default router;
