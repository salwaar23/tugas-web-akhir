import express from "express";
import {
    getKK,
    getKKById,
    createKK,
    updateKK,
    deleteKK
} from "../controllers/KK.js";

const router = express.Router();

router.get('/KK', getKK);
router.get('/KK/:id', getKKById);
router.post('/KK', createKK);
router.patch('/KK/:id', updateKK);
router.delete('/KK/:id', deleteKK);

export default router;