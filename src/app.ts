import cors from "cors";
import express, { Application } from "express";
import router from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
