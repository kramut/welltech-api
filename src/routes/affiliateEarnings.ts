import { Router } from 'express';
import { affiliateEarningController } from '../controllers/affiliateEarningController';

const router = Router();

router.get('/stats', affiliateEarningController.getStats);
router.get('/', affiliateEarningController.getAll);
router.get('/:id', affiliateEarningController.getById);
router.post('/', affiliateEarningController.create);
router.put('/:id', affiliateEarningController.update);
router.delete('/:id', affiliateEarningController.delete);

export default router;




