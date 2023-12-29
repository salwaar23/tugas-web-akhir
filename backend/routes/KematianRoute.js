import express from "express";
import {
    getKematian,
    getKematianById,
    createKematian,
    updateKematian,
    deleteKematian
} from "../controllers/Kematian.js";

const router = express.Router();

router.get('/Kematian', getKematian);
router.get('/Kematian/:id', getKematianById);
router.post('/Kematian', createKematian);
router.patch('/Kematian/:id', updateKematian);
router.delete('/Kematian/:id', deleteKematian);

export default router;