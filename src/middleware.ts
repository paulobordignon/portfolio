import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAdmin = session?.sub === process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

  if ((!session?.sub || !isAdmin) && path.indexOf("/admin") > -1) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
