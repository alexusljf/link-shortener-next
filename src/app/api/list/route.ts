import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export async function GET(req: NextRequest) {
  await connect();
  try {
    const record = await Link.find(); // Fetch the first document
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
