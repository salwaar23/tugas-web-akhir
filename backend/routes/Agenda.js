import express from "express";
import {
    getAgenda,
    getAgendaById,
    createAgenda,
    updateAgenda,
    deleteAgenda
} from "../controllers/Agenda.js";

const router = express.Router();

router.get('/Agenda', getAgenda);
router.get('/Agenda/:id', getAgendaById);
router.post('/Agenda', createAgenda);
router.patch('/Agenda/:id', updateAgenda);
router.delete('/Agenda/:id', deleteAgenda);

export default router;