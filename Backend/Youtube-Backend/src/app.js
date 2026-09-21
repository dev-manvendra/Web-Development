import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes

import userRouter from "./routes/user.route.js"

app.use("/api/v1/users", userRouter)

import { ApiError } from "./utils/ApiErrors.js";
import { ApiResponse } from "./utils/ApiResponse.js";

app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json(
            new ApiResponse(err.statusCode, null, err.message)
        )
    }

    console.error("Unhandled error:", err)
    return res.status(500).json(
        new ApiResponse(500, null, "Internal Server Error")
    )
})

export default app;