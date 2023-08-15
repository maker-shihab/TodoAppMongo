import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function maker() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo_app");
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

maker();
