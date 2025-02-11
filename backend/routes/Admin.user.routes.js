import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
} from "../controllers/Admin-User.controller.js";
import { verifyAdminjwt } from "../Middlewares/AdminAuth.middleware.js";

const router = Router();
router.route('/register').post(registerUser);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyAdminjwt, logoutUser);
router.route("/refreashtoken").post(refreshAccessToken);
router.route("/change-password").post(verifyAdminjwt, changeCurrentPassword);
router.route("/current-user").post(verifyAdminjwt, getCurrentUser);
router.route("/update-account").patch(verifyAdminjwt, updateAccountDetails);

export default router