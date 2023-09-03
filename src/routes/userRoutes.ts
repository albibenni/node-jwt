import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController";
const userRoutes = express.Router();

userRoutes.post("/auth", authUser);
userRoutes.post("/register", registerUser);
userRoutes.post("/logout", logoutUser);
userRoutes.route("/profile").get(getUserProfile).put(updateUserProfile);

export default userRoutes;
