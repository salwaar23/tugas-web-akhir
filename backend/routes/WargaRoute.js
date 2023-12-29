import express from "express";
import {
    getWarga,
    getWargaById,
    createWarga,
    updateWarga,
    deleteWarga
} from "../controllers/Warga.js";

const router = express.Router();

router.get('/warga', getWarga);
router.get('/warga/:id', getWargaById);
router.post('/warga', createWarga);
router.patch('/warga/:id', updateWarga);
router.delete('/warga/:id', deleteWarga);

export default router;