import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/signup", "/api/auth"];

export async function middleware(req: NextRequest) {
  const isPublic = PUBLIC_PATHS.some((p) =>
    req.nextUrl.pathname.startsWith(p)
  );
  if (isPublic) return NextResponse.next();

  const cookie = req.cookies.get("better-auth.session_token");
  if (!cookie?.value) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon|public).*)"],
};
