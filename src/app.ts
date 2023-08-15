import cors from "cors";
import express, { Application } from "express";
import router from "./app/routes";
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

export default app;
