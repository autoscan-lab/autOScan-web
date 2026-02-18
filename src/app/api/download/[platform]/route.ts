import { NextRequest, NextResponse } from "next/server";
import { auth, isEmailAllowed } from "@/lib/auth";
import { readFile, access } from "fs/promises";
import path from "path";

const BINARY_MAP: Record<string, string> = {
  "darwin-arm64": "autoscan-darwin-arm64",
  "linux-amd64": "autoscan-linux-amd64",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ platform: string }> }
) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isEmailAllowed(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { platform } = await params;
  const filename = BINARY_MAP[platform];
  if (!filename) {
    return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
  }

  const binaryPath = path.join(process.cwd(), "binaries", filename);

  try {
    await access(binaryPath);
  } catch {
    return NextResponse.json(
      { error: "Binary not found. Contact the administrator." },
      { status: 404 }
    );
  }

  const data = await readFile(binaryPath);

  return new NextResponse(data, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(data.length),
    },
  });
}
