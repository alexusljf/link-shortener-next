import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export const maxDuration = 60;
export async function GET(req: NextRequest) {
  await connect();
  try {
    console.log("before finding the records");
    const record = await Link.find();
    console.log({ record });
    if (record) {
      return NextResponse.json(record, {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
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
