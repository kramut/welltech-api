import { Router } from 'express';
import { analyticsController } from '../controllers/analyticsController';

const router = Router();

router.get('/dashboard', analyticsController.getDashboard);

export default router;




