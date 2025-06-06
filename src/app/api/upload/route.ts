import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { Buffer } from "buffer";

export const runtime = "edge";

export async function POST(req: Request) {
    try {
        const { file, name } = await req.json();

        if (!file || !name) {
            return NextResponse.json({ error: "Missing file or name" }, { status: 400 });
        }

        const buffer = Buffer.from(file, "base64");

        const blob = await put(name, buffer, {
            access: "public",
        });

        return NextResponse.json({ url: blob.url });
    } catch (err) {
        console.error("Upload error:", err);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
