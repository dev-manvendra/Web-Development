import AsyncHandler from "../utils/AsyncHandler.js"

const userRegister = AsyncHandler((req, res) =>{
    res.status(200).json(
        {
            message : "ok"
        }
    )
})