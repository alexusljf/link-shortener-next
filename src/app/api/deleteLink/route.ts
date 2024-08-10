import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export const maxDuration = 60;
export async function DELETE(req: NextRequest) {
  await connect();
  const id = req.nextUrl.searchParams.get("id");
  try {
    const record = await Link.deleteOne({ shortUrl: id });
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
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
