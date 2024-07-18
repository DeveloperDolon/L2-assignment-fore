import { Types } from 'mongoose';

export default interface TOrder {
  user: Types.ObjectId;
  products: Types.ObjectId[];
  totalPrice: number;
  shippingAddress: string;
  paymentStatus: 'Pending' | 'Done';
  orderStatus: 'Online Pay' | 'Cash on delivery';
}
