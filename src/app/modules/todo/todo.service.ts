import ITodo from "./todo.interface";
import Todos from "./todo.model";

const createTodo = async (payload: ITodo): Promise<ITodo | null> => {
  const newTodo = await Todos.create(payload);
  return newTodo;
};

const getAllTodos = async () => {
  const result = await Todos.find();
  return result;
};

const updateTodos = async (
  id: string,
  payload: Partial<ITodo>
): Promise<ITodo | null> => {
  const updateNewTodos = await Todos.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );
  return updateNewTodos;
};

const deleteTodo = async (id: string) => {
  const deleteTodo = await Todos.findByIdAndDelete(id);
  return deleteTodo;
};

export const TodosServices = {
  createTodo,
  getAllTodos,
  updateTodos,
  deleteTodo,
};
