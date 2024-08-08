import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();

router.get('/', userController.home);
router.get('/users', userController.getAllUsers)
router.post('/users/create',userController.createUser);
router.get('/users/:id', userController.getUserById)
router.get('/users/update/:id', userController.getUserUpd)

export default router;
