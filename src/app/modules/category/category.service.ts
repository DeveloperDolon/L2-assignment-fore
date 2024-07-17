import TCategory from './category.interface';
import { CategoryModel } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await CategoryModel.create(payload);

  return result;
};

const getAllCategoryFromDB = async () => {
  const result = await CategoryModel.find({ isDelete: false });

  return result;
};

const getSingleCategoryFromDB = async (id: string) => {
  const result = await CategoryModel.findById({ _id: id });

  return result;
};

const deleteCategoryIntoDB = async (id: string) => {
  const result = await CategoryModel.findByIdAndUpdate(
    { _id: id },
    { isDelete: true },
  );

  return result;
};

const updateCategoryIntoDB = async (
  payload: Partial<TCategory>,
  id: string,
) => {
  const result = await CategoryModel.findByIdAndUpdate({ _id: id }, payload);

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoryFromDB,
  getSingleCategoryFromDB,
  deleteCategoryIntoDB,
  updateCategoryIntoDB,
};
