import { Types } from 'mongoose';

export default interface TProduct {
  product_name: string;
  actual_price: number;
  slider_images: string;
  discount: number;
  description: string;
  category_id: Types.ObjectId;
  in_stock: boolean;
  quantity: number;
  brand_id: Types.ObjectId;
  warranty: string;
  policies: string;
  is_deleted: boolean;
}
