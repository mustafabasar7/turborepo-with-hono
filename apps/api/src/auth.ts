import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@repo/db";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  emailAndPassword: { enabled: true },
  trustedOrigins: [
    "http://localhost:3001",
    "http://localhost:3002",
    process.env.WEB_URL ?? "",
    process.env.LANDING_URL ?? "",
  ],
});

export type Session = typeof auth.$Infer.Session;
