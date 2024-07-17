import { Types } from 'mongoose';

export default interface TProduct {
  name: string;
  description: string;
  category: Types.ObjectId[];
  price: number;
  image: string;
  isDeleted: boolean;
  stock: number;
}
