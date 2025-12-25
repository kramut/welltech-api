import { Router } from 'express';
import { articleController } from '../controllers/articleController';

const router = Router();

router.get('/', articleController.getAll);
router.get('/slug/:slug', articleController.getBySlug);
router.get('/:id', articleController.getById);
router.post('/', articleController.create);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.delete);

export default router;




