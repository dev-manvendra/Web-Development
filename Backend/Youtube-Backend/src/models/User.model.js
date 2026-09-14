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

UserSchema.methods(verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
})

UserSchema.methods(getAccessToken = function () {
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username : this.username,
        },
       process.env.ACCESS_TOKEN_SECRET,
       {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
       }

    )
})
UserSchema.methods(getRefreshToken = function () {
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username : this.username,
        },
       process.env.REFRESH_TOKEN_SECRET,
       {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
       }

    )
})

export const User = mongoose.model("User", UserSchema);


