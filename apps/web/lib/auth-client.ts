import { createAuthClient } from "better-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
}) as any;

export { authClient };

export const useSession = authClient.useSession as ReturnType<
  typeof createAuthClient
>["useSession"];
export const signIn = authClient.signIn as ReturnType<
  typeof createAuthClient
>["signIn"];
export const signOut = authClient.signOut as ReturnType<
  typeof createAuthClient
>["signOut"];
export const signUp = authClient.signUp as ReturnType<
  typeof createAuthClient
>["signUp"];
