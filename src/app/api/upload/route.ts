import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { Buffer } from "buffer";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { file, name } = body;

        if (!file || !name) {
            return NextResponse.json({ error: "Missing file or name" }, { status: 400 });
        }

        const buffer = Buffer.from(file, "base64");

        const blob = await put(name, buffer, {
            access: "public",
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        return NextResponse.json({ url: blob.url });
    } catch (err: any) {
  console.error("Upload error full:", err); // log toàn bộ object
  console.error("Upload error msg:", err.message); // nếu có .message
  console.log("TOKEN:", process.env.BLOB_READ_WRITE_TOKEN);

  return NextResponse.json(
    {
      error: "Upload failed",
      message: err.message,
      token: !!process.env.BLOB_READ_WRITE_TOKEN, // true/false
    },
    { status: 500 }
  );
}

}
