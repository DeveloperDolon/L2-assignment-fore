import { Order, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createOrderIntoDB = async (payload: Order) => {
  const result = await prisma.order.create({
    data: payload,
  });

  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await prisma.order.findMany();

  return result;
};

const getUserOrderFromDB = async (userId: string) => {
  const result = await prisma.order.findMany({
    where: { userId },
  });

  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await prisma.order.findUnique({
    where: { id },
  });

  return result;
};

const deleteOrderIntoDB = async (id: string) => {
  const result = await prisma.order.update({
    where: { id },
    data: { isDeleted: true },
  });

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
