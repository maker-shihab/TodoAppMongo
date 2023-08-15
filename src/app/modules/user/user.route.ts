import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create-user", UserController.createUser);
router.get("/users", UserController.getAllUsers);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
