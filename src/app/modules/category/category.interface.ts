import { Types } from 'mongoose';

export default interface TCategory {
  name: string;
  products?: Types.ObjectId[];
  isDelete: boolean;
}
