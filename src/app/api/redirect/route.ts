import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export async function GET(req: NextRequest) {
  await connect();
  const id = req.nextUrl.searchParams.get("id");
  console.log({ id });
  try {
    const record = await Link.findOne({ shortUrl: id });
    if (record) {
      return NextResponse.json(record, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No records found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
