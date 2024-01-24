import express from "express";
import {
    getPindah,
    getPindahById,
    createPindah,
    updatePindah,
    deletePindah
} from "../controllers/Pindah.js";

const router = express.Router();

router.get('/Pindah', getPindah);
router.get('/Pindah/:id', getPindahById);
router.post('/Pindah', createPindah);
router.patch('/Pindah/:id', updatePindah);
router.delete('/Pindah/:id', deletePindah);

export default router;