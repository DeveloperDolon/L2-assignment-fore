import QueryBuilder from '../../builder/QueryBuilder';
import TProduct from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  console.log(payload);
  const result = await ProductModel.create(payload);

  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    ProductModel.find(),
    // .populate('preRequisiteCourses.course'),
    query,
  )
    .search(['name', 'category', 'price'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(id, { is_deleted: true });

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
