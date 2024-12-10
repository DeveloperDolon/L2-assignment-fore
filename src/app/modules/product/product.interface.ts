import { Types } from 'mongoose';

export default interface TProduct {
  product_name: string;
  actual_price: number;
  images: string;
  discount: number;
  description: string;
  category_id: Types.ObjectId;
  in_stock: boolean;
  quantity: number;
  brand: string;
  warranty: string;
  policies: string;
  is_deleted: boolean;
}
