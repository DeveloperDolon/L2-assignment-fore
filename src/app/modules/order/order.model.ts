import mongoose, { Schema } from 'mongoose';
import TOrder from './order.interface';

const orderSchema = new Schema<TOrder>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Done'],
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ['Online Pay', 'Cash on delivery'],
    required: true,
  },
});

export const OrderModel = mongoose.model<TOrder>('Order', orderSchema);
