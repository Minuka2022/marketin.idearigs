import express from 'express';
import { login, getMe } from '../controllers/auth.controller';
import { protect } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/login', login);
router.get('/me', protect, getMe);

export default router;