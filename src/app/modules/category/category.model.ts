import mongoose, { Schema } from 'mongoose';
import TCategory from './category.interface';

const categorySchema = new Schema<TCategory>({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Products',
    },
  ],
});

export const CategoryModel = mongoose.model<TCategory>(
  'Categories',
  categorySchema,
);
