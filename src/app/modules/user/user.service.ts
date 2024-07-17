import TUser, { TLoginUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { createToken } from './user.utils';
import { UserModel } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const myPlaintextPassword = payload?.password;
  payload.password = await bcrypt.hash(
    myPlaintextPassword,
    Number(config.bcrypt_salt_rounds as string),
  );

  const result = await UserModel.create(payload);

  return result;
};

const loginUserFromDB = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email: payload?.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Your is not exist!');
  }

  if (user?.isDelete === true) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Your account is blocked!');
  }

  const isMatched = await bcrypt.compare(payload?.password, user?.password);

  if (!isMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'User password is not matched!');
  }

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  const refreshToken = await createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expired_in as string,
  );

  const accessToken = await createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expired_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find({ isDelete: false });

  return result;
};

const updateUserIntoDB = async (payload: Partial<TUser>, id: string) => {
  const result = await UserModel.findByIdAndUpdate(id, payload);

  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findById(id);

  return result;
};

const deleteUserIntoDB = async (id: string) => {
  const result = await UserModel.findByIdAndUpdate(id, { isDelete: true });

  return result;
};

export const UserServices = {
  createUserIntoDB,
  loginUserFromDB,
  getAllUsersFromDB,
  updateUserIntoDB,
  getSingleUserFromDB,
  deleteUserIntoDB,
};
