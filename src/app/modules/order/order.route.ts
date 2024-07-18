import express from 'express';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.post(
  '/',
  auth('USER', 'ADMIN', 'SUPER_ADMIN'),
  OrderController.createOrder,
);

router.get('/', auth('ADMIN', 'SUPER_ADMIN'), OrderController.getAllOrders);

router.get(
  '/:userId',
  auth('USER', 'ADMIN', 'SUPER_ADMIN'),
  OrderController.getUserOrders,
);

router.get(
  '/:id',
  auth('ADMIN', 'SUPER_ADMIN'),
  OrderController.getSingleOrder,
);

export const OrderRoutes = router;
