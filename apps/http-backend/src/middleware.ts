import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
// import { JWT_SECRET } from "@repo/backend-common/config";
// import { CreateUserSchema } from "@repo/common/types";

export function middleware(req: Request, res: Response, next: NextFunction) {
  //@ts-ignore
  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    //@ts-ignore
    req.userId = decoded.userId;
    next();
  } else {
    //@ts-ignore

    res.status(403).json({
      message: "there is some probelm ",
    });
  }
}
