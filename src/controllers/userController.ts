import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

//@desc Auth user/set tokern
//route POST /users/login
//@access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc Register a new user
//route POST /users/register
//@access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Register User" });
});

//@desc Logot user
//route POST /users/logout
//@access Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout User" });
});

//@desc Get user profile
//route GET /users/profile
//@access Private - Token
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "User Profile" });
});

//@desc Update user profile
//route PUT /users/profile
//@access Private - Token
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
