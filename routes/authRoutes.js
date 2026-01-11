import express from "express";
import { login, registerEmployee } from "../auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", registerEmployee); 

export default router;
