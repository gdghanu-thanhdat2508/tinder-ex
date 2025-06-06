import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { Buffer } from "buffer";

export const runtime = "edge";

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
        });

        return NextResponse.json({ url: blob.url });
    } catch (err: any) {
        console.error("Upload error:", err.message || err);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
