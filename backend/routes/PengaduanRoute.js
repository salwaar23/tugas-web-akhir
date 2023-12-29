import express from "express";
import {
    getPengaduan,
    getPengaduanById,
    createPengaduan,
    updatePengaduan,
    deletePengaduan
} from "../controllers/Pengaduan.js";

const router = express.Router();

router.get('/Pengaduan', getPengaduan);
router.get('/Pengaduan/:id', getPengaduanById);
router.post('/Pengaduan', createPengaduan);
router.patch('/Pengaduan/:id', updatePengaduan);
router.delete('/Pengaduan/:id', deletePengaduan);

export default router;