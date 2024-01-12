import express from "express";
import {
  getTodosCntlr,
  addTodosCntlr,
  updateTodoCntlr,
  deleteTodoCntlr
} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/", getTodosCntlr);
router.post("/add", addTodosCntlr);
router.patch("/update/:id", updateTodoCntlr);
router.delete("/delete/:id", deleteTodoCntlr);

export default router;
