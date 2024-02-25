import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import platformAPIClient from "@/lib/platformAPIClient";
import { AuthResult } from "@/types";
import prisma from "@/lib/prisma";
import { defaultSession } from "@/lib/utils";
import { getSession } from "@/actions/session";

export async function POST(req: NextRequest) {
  const session = await getSession();
  const auth: AuthResult = await req.json();
  try {
    // Verify the user's access token with the /me endpoint:
    const me = await platformAPIClient.get(`/v2/me`, {
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    });
  } catch (err) {
    console.log("[LOGIN_SERVER]", err);
    return NextResponse.json(defaultSession);
  }

  try {
    session.username = auth.user.username;
    session.isLoggedIn = true;
    session.accessToken = auth.accessToken;
    session.uuid = auth.user.uid;
    const user = await prisma.user.upsert({
      where: { uuid: auth.user.uid },
      update: {
        accessToken: auth.accessToken,
      },
      create: {
        uuid: auth.user.uid,
        username: auth.user.username,
        accessToken: auth.accessToken,
        referralCode: crypto.randomUUID(),
      },
    });
    session.points = user.points;
    session.referralCode = user.referralCode;
    session.latitude = req.geo?.latitude;
    session.longitude = req.geo?.longitude;
    await session.save();
    // console.log({ session });
    return NextResponse.json(session);
  } catch (err) {
    console.log("[LOGIN_SERVER]", err);
    return NextResponse.json(defaultSession);
  }
}

export async function GET(request: NextRequest) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return Response.json(defaultSession);
  }

  return Response.json(session);
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();

  session.destroy();

  revalidateTag("session");
  return redirect(`/`);
}
