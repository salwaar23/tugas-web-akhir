import express from "express";
import {
    getLahir,
    getLahirById,
    createLahir,
    updateLahir,
    deleteLahir
} from "../controllers/Lahir.js";

const router = express.Router();

router.get('/Lahir', getLahir);
router.get('/Lahir/:id', getLahirById);
router.post('/Lahir', createLahir);
router.patch('/Lahir/:id', updateLahir);
router.delete('/Lahir/:id', deleteLahir);

export default router;