import express from "express";
import {signUpCntlr} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/signUp", signUpCntlr);
// router.post("/")

export default router;
