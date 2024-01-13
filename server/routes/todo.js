import express from "express";
import {
  getTodosCntlr,
  addTodosCntlr,
  updateTodoCntlr,
  deleteTodoCntlr
} from "../controllers/todoControllers.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTodosCntlr);
router.post("/add", auth, addTodosCntlr);
router.patch("/update/:id", auth, updateTodoCntlr);
router.delete("/delete/:id", auth, deleteTodoCntlr);

export default router;
