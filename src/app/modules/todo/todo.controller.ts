import { NextFunction, Request, Response } from "express";
import { TodosServices } from "./todo.service";

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...todo } = req.body;
    const result = await TodosServices.createTodo(todo);

    res.status(200).json({
      success: true,
      message: "Todo created successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Todo is not create!",
    });
    next(error);
  }
};

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getAllTodos = await TodosServices.getAllTodos();

    res.status(200).json({
      success: true,
      message: "Todo rettrif successfully",
      data: getAllTodos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sorry this is an error todo not created",
    });
    next(error);
  }
};

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const updateData = await TodosServices.updateTodos(id, req.body);

  res.status(200).json({
    success: true,
    message: "Todos Update Successfully",
    data: updateData,
  });
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const deleteTodo = await TodosServices.deleteTodo(id);

  res.status(200).json({
    success: true,
    message: "Todo update successfully",
    data: deleteTodo,
  });
};

export const TodosController = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
