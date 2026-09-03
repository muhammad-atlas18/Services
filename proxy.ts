import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isUrduPath = pathname === "/ur" || pathname.startsWith("/ur/");
  const saved = request.cookies.get("gharmahir-locale")?.value;

  if (!isUrduPath && saved === "ur") {
    const target = request.nextUrl.clone();
    target.pathname = `/ur${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(target);
  }

  if (isUrduPath) {
    const target = request.nextUrl.clone();
    target.pathname = pathname === "/ur" ? "/" : pathname.slice(3);
    target.search = search;
    const headers = new Headers(request.headers);
    headers.set("x-gharmahir-locale", "ur");
    const response = NextResponse.rewrite(target, { request: { headers } });
    response.cookies.set("gharmahir-locale", "ur", { path: "/", maxAge: 31536000, sameSite: "lax" });
    return response;
  }

  const headers = new Headers(request.headers);
  headers.set("x-gharmahir-locale", "en");
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"] };
