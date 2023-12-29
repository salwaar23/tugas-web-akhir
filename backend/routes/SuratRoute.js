import express from "express";
import {
    getSurat,
    getSuratById,
    createSurat,
    updateSurat,
    deleteSurat
} from "../controllers/Surat.js";

const router = express.Router();

router.get('/Surat', getSurat);
router.get('/Surat/:id', getSuratById);
router.post('/Surat', createSurat);
router.patch('/Surat/:id', updateSurat);
router.delete('/Surat/:id', deleteSurat);

export default router;