import { Schema, model } from "mongoose";
import ITodo from "./todo.interface";

const TodoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Todos = model<ITodo>("Todos", TodoSchema);

export default Todos;
