import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({

    description : {
        type : String,
        require : true
    },
    name : {
        type : String, 
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    stock : Number,

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
    

})

export const Product = mongoose.model("Product", ProductSchema)