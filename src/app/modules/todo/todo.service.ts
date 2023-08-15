import ITodo from "./todo.interface";
import Todos from "./todo.model";

const createTodo = async (payload: ITodo) => {
  const newTodo = await Todos.create(payload);
  return newTodo;
};

export const TodosController = {
  createTodo,
};
