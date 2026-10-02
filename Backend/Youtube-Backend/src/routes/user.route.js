import {Router} from "express"
import {
    loginUser, 
    logoutUser, 
    userRegister,
    changeCurrentPassword,
    getCurrentUser
} from "../controllers/user.controller.js"
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
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)

// export router
export default router