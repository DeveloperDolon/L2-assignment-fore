import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ProductRouter } from '../modules/product/product.route';
import { CategoryRouter } from '../modules/category/category.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
  {
    path: '/product',
    route: ProductRouter,
  },
  {
    path: '/category',
    route: CategoryRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
