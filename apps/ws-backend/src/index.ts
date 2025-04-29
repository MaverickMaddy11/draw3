import { WebSocketServer } from "ws";
import express, { request } from "express";
import jwt from "jsonwebtoken";
// import { JWT_SECRET } from "@repo/backend-common/config";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }

  const queryparam = new URLSearchParams(url.split("?")[1]);
  const token = queryparam.get("token") || "";

  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded) {
    ws.close();
    return;
  }
  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
