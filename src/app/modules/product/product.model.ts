import mongoose, { Schema } from 'mongoose';
import TProduct from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default:
        'https://t3.ftcdn.net/jpg/07/48/61/48/240_F_748614846_odYf50Eo0Zjx9D0SXOBnD0lwg0zSjLhQ.jpg',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = mongoose.model<TProduct>('Product', productSchema);
