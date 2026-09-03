import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({})

export const Todo = mongoose.Model("Todo", todoSchema);