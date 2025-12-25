import { Router } from 'express';
import { videoController } from '../controllers/videoController';

const router = Router();

router.get('/', videoController.getAll);
router.get('/:id', videoController.getById);
router.post('/', videoController.create);
router.put('/:id', videoController.update);
router.delete('/:id', videoController.delete);

export default router;




