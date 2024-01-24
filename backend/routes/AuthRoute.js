import express from "express";
import {login, logout} from "../controllers/Auth.js"

const router = express.Router();

router.post('/login', login);
router.delete('/login', logout);

export default router;