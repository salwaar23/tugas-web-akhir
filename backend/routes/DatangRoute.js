import express from "express";
import {
    getDatang,
    getDatangById,
    createDatang,
    updateDatang,
    deleteDatang
} from "../controllers/Datang.js";

const router = express.Router();

router.get('/Datang', getDatang);
router.get('/Datang/:id', getDatangById);
router.post('/Datang', createDatang);
router.patch('/Datang/:id', updateDatang);
router.delete('/Datang/:id', deleteDatang);

export default router;