import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("connection error", error);
        })
        
    } catch (error) {
        console.log("error", error);
    }
})()