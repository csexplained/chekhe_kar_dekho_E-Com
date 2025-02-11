import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
} from "../controllers/user.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();
router.route('/register').post(registerUser);


router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyjwt, logoutUser)
router.route("/refreashtoken").post(refreshAccessToken)
router.route("/change-password").post(verifyjwt, changeCurrentPassword)
router.route("/current-user").post(verifyjwt, getCurrentUser)
router.route("/update-account").patch(verifyjwt, updateAccountDetails)

export default router