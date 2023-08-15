import { IUser } from "./user.interface";
import User from "./user.model";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const newUser = await User.create(payload);

  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await User.find();
  return allUsers;
};
const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const udpateNewUser = await User.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );
  return udpateNewUser;
};
const deleteUser = async (id: string): Promise<IUser | null> => {
  const dltUser = await User.findByIdAndDelete(id);
  return dltUser;
};

export const UserService = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
