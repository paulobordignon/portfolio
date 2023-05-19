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

  const isAdmin = session?.sub === "0x6585d1ba166aeBF1e6A88f816e3024BF324D21ad";

  if ((!session?.sub || !isAdmin) && path.indexOf("/admin") > -1) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
