import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/sign-up', UserController.createUser);

router.put('/login', UserController.loginUser);

router.get('/', UserController.getAllUser);

router.put('/:id', UserController.updateUser);

router.get('/:id', UserController.getSingleUser);

router.delete('/:id', UserController.deleteUser);

export const UserRoute = router;
