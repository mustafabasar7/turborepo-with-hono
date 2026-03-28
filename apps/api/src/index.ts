import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./auth.js";
import { CONSTANT } from "@repo/constants";

const app = new Hono();

app.use(
  "/api/auth/*",
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3002",
      process.env.WEB_URL ?? "",
      process.env.LANDING_URL ?? "",
    ],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.on(["GET", "POST"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => c.text(CONSTANT));

export default app;
