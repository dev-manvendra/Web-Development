import mongoose from "mongoose";
const CategorySchema = mongoose.Schema({
    name : {
        type : String,
        
    }
})

export const Category = mongoose.model("Category", CategorySchema)