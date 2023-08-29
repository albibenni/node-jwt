import { Request, Response } from "express";

const authUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
