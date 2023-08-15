import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ...user } = req.body;
  const result = await UserService.createUser(user);

  res.status(201).json({
    success: true,
    message: "User Created successfully!",
    data: result,
  });
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await UserService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "All users retrieved successfully!",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
    });
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await UserService.updateUser(id, req.body);

  res.status(200).json({
    success: true,
    message: "User Updated Successfully",
    data: result,
  });
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = UserService.deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User Deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error delete user",
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
