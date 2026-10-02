import {Router} from "express"
import {
    loginUser, 
    logoutUser, 
    userRegister,
    changeCurrentPassword,
    getCurrentUser,
    updateAvatar,
    updateCoverImg
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

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImg"), updateCoverImg)

// export router
export default router