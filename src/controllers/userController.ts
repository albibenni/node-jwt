import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

//@desc Auth user/set tokern
//route POST /users/login
//@access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth User" });
});

export { authUser };
