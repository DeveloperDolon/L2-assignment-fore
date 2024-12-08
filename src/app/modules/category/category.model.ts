import mongoose, { Schema } from 'mongoose';
import TCategory from './category.interface';

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const CategoryModel = mongoose.model<TCategory>(
  'Category',
  categorySchema,
);
