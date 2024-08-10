import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../db";
import Link from "../../../../models/Link";

export const maxDuration = 60;
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  await connect();
  try {
    const record = await Link.find();
    if (record) {
      return NextResponse.json(record, {
        status: 200,
        headers: {
          "Cache-Control": "no-store", // Ensure no caching
          "x-vercel-cache": "REVALIDATE",
        },
      });
    } else {
      return NextResponse.json(
        { message: "No records found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Failed to fetch data", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
