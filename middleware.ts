import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSession } from "./actions/session";
import { defaultLocation } from "./config/default";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await getSession();
  const { nextUrl: url, geo } = request;
  const searchParams = url.searchParams;
  const longitude = searchParams.get("longitude");
  const latitude = searchParams.get("latitude");

  if (url.pathname.startsWith("/dashboard/host")) {
    const redirectTo = `${url.origin}/dashboard/be-a-host`;
    if (!session.isHost) {
      return NextResponse.redirect(redirectTo, 302);
    }
  }

  if (url.pathname === "/dashboard/login") {
    if (!latitude || !longitude) {
      url.searchParams.set(
        "latitude",
        geo?.latitude || `${defaultLocation.latitude}`
      );
      url.searchParams.set(
        "longitude",
        geo?.longitude || `${defaultLocation.longitude}`
      );
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  const latitudeParam = `&latitude=${
    geo?.latitude || defaultLocation.latitude
  }`;
  const longitudeParam = `&longitude=${
    geo?.longitude || defaultLocation.longitude
  }`;

  if (!session.isLoggedIn) {
    const redirectTo = `${url.origin}/dashboard/login?redirect=${url.pathname}${latitudeParam}${longitudeParam}`;

    return NextResponse.redirect(redirectTo, 302);
  }
}

// See "Matching Paths" below to learn more /about/:path*
export const config = {
  matcher: ["/dashboard/:path*"],
};
