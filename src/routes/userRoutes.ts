import express from "express";
import { authUser } from "../controllers/userController";
const userRoutes = express.Router();

userRoutes.post("/auth", authUser);

export default userRoutes;
