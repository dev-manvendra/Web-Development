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

UserSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
    
})

UserSchema.methods(async function (password) {
    return await bcrypt.compare(password, this.password);
    
})

export const User = mongoose.model("User", UserSchema);


