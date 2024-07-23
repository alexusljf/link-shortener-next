import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export async function GET() {
  console.log("before finding the records");
  await connect();
  try {
    console.log("before finding the records");
    const record = await Link.find();
    console.log({ record });
    if (record) {
      const response = NextResponse.json(record, { status: 200 });
      response.headers.set("Cache-Control", "no-store"); // Disable caching
      return response;
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
