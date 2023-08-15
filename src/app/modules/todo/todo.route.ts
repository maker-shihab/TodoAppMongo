import { Router } from "express";
import { TodosController } from "./todo.controller";

const router = Router();

router.post("/create-todo", TodosController.createTodo);
router.get("/", TodosController.getTodos);
router.get("/:id", TodosController.updateTodo);
router.get("/:id", TodosController.deleteTodo);

export const TodosRouter = router;
