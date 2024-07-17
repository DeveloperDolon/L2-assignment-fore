import TProduct from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);

  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find({ isDeleted: false });

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(id, { isDeleted: true });

  return result;
};

const updateProductIntoDB = async (payload: Partial<TProduct>, id: string) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
};
