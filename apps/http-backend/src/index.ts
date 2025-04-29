import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
//@ts-ignore
app.post("/signup", (req, res) => {
  res.send("hello there ");
});

app.post("/signin", (req, res) => {
  // there would be reues to db to find

  const username = 1;
  const token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );

  res.json({ token });
});

//@ts-ignore
app.post("/room", middleware, (req, res) => {
  res.status(200).json({
    message: "all good connected to room ",
  });
});

app.listen(3000);
