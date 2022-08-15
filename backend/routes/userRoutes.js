import express from 'express'
import { authenticate } from '../middleware/authMiddleware.js'
import * as userController from '../controllers/userController.js'

const router = express.Router();

router.post('/register', userController.userRegisteration);
router.post('/login', userController.userLogin);
router.route('/profile').get(authenticate, userController.userProfile);

export default router;
