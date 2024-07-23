import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export async function GET(req: NextRequest) {
  console.log("enter get req");
  await connect();
  try {
    console.log("enter try, before finding the records");
    const record = await Link.find();
    console.log({ record });
    if (record) {
      console.log("enter if");
      return NextResponse.json(record, {
        status: 200,
        headers: {
          "Cache-Control": "no-store", // Ensure no caching
        },
      });
    } else {
      console.log("enter else");
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
