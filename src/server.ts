import mongoose from "mongoose";
import app from "./app";
import { errorLogger, logger } from "./shared/logger";

const port = 5000;

async function maker() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo_app");
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      logger.info(`Example app listening on port ${port}`);
    });
  } catch (error) {
    errorLogger.error(error);
  }
}

maker();
