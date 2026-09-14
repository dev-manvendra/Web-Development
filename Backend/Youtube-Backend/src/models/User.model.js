import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    username : {
        type: String,
        required : true,
        unique : true,
        lowecase : true,
        trim : true,
        index : true
    },

    email : {
        type: String,
        required : true,
        lowecase : true,
        unique : true,
        trim : true,
       
    },

    password : {
        type: String,
        required : true,
        unique : true,
        trim : true,
        lowecase : true,
        
    },

    fullname : {
        type: String,
        required : true,
        lowecase : true,
        trim : true,
        index : true
        
    },
    avatar : {
        type : String,
        required : true,
        
    },
    coverImg : String,

    watchHistory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "videos"
    }

},{timestamps : true});

export const User = mongoose.model("User", UserSchema);


