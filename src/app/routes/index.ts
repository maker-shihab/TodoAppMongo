import { Router } from "express";
import { TodosRouter } from "../modules/todo/todo.route";
import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/todos",
    route: TodosRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
