import express from 'express';
import { getFamilyDetails } from '../controllers/KeluargaController.js'; 

const router = express.Router();

router.get('/family/:nokk', getFamilyDetails);

export default router;
