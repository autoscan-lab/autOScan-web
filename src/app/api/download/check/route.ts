import { NextResponse } from "next/server";
import { auth, isEmailAllowed } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ allowed: false });
  }

  return NextResponse.json({
    allowed: isEmailAllowed(session.user.email),
  });
}
