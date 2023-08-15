import { NextFunction, Request, Response } from "express";

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...todos } = req.body;
    const result = TodosController.createTodo(todos);
  } catch (error) {
    next(error);
  }
};
