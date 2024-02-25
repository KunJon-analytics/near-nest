import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSession } from "./actions/session";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await getSession();
  const { nextUrl: url, geo } = request;
  const searchParams = url.searchParams;
  const longitude = searchParams.get("longitude");
  const latitude = searchParams.get("latitude");
  console.log({ latitude, longitude });

  if (url.pathname === "/dashboard/login") {
    return NextResponse.next();
  }

  const latitudeParam = geo?.latitude && `&latitude=${geo.latitude}`;
  const longitudeParam = geo?.longitude && `&longitude=${geo.longitude}`;

  if (!session.isLoggedIn) {
    const redirectTo = `${url.origin}/dashboard/login?redirect=${url.pathname}${
      latitudeParam && latitudeParam
    }${longitudeParam && longitudeParam}`;

    return NextResponse.redirect(redirectTo, 302);
  }
}

// See "Matching Paths" below to learn more /about/:path*
export const config = {
  matcher: ["/dashboard/:path*"],
};
