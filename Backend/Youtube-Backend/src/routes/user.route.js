import {Router} from "express"
import {loginUser, logoutUser, userRegister} from "../controllers/user.controller.js"
import { upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(
    
    upload.fields([

        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImg",
            maxCount : 1
        }
    ]),

    userRegister)

router.route("/loggin").post(loginUser) 
router.route("/loggedout").post(verifyJWT ,logoutUser) 
export default router