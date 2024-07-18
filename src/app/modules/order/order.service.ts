import TOrder from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);

  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();

  return result;
};

const getUserOrderFromDB = async (userId: string) => {
  const result = await OrderModel.find({ user: userId });

  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await OrderModel.findById(id);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getUserOrderFromDB,
  getSingleOrderFromDB,
};
