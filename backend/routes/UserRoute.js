import express from "express";
import {
    getUsers,
    getUsersById,
    createUsers,
    UpdateUsers,
    deleteUsers
} from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id',  getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', UpdateUsers);
router.delete('/users/:id', deleteUsers);

export default router;