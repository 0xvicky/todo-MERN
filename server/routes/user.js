import express from "express";
import {signInCntlr, signUpCntlr} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/signUp", signUpCntlr);
router.post("/signIn", signInCntlr);

export default router;
