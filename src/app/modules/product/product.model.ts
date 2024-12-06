import mongoose, { Schema } from 'mongoose';
import TProduct from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    product_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    actual_price: {
      type: Number,
      required: true,
    },
    images: {
      type: Schema.Types.Mixed,
      default:
        'https://t3.ftcdn.net/jpg/07/48/61/48/240_F_748614846_odYf50Eo0Zjx9D0SXOBnD0lwg0zSjLhQ.jpg',
    },    
    is_deleted: {
      type: Boolean,
      default: false,
    },
    in_stock: {
      type: Boolean,
      default: true,
    },
    discount: {
      type: Number,
      required: false
    },
    quantity: {
      type: Number,
      required: true
    },
    warranty: {
      type: String,
      required: false
    },
    policies: {
      type: String,
      required: false
    },
    brand_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Brand',
    }
  },
  {
    timestamps: true,
  },
);

export const ProductModel = mongoose.model<TProduct>('Product', productSchema);
