import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth User" });
});

export { authUser };
