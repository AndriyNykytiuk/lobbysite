import express from 'express';
import AdminController from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', AdminController.register);
router.post('/login', AdminController.login);

// Protected routes
router.get('/profile', authMiddleware, AdminController.getProfile);
router.get('/all', authMiddleware, AdminController.getAllAdmins);
router.delete('/:id', authMiddleware, AdminController.deleteAdmin);

export default router;
