import express from 'express';
import NewsController from '../controllers/newsController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', NewsController.getAll);
router.get('/:id', NewsController.getById);

// Protected routes (only for authenticated admins)
router.post('/', authMiddleware, NewsController.create);
router.put('/:id', authMiddleware, NewsController.update);
router.delete('/:id', authMiddleware, NewsController.delete);

export default router;
