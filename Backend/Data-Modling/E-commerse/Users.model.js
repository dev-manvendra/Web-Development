import mongoose, { mongo } from "mongoose";

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        unique : true,
        lowercase : true,
        required : true

    },
    email : {
        type : String,
        unique : true,
        required : true
        

    },
    password : {
        type : String,
        unique : true,
        required : true

    }
})

export const User = mongoose.model("User", UserSchema);