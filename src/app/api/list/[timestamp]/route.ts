import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../db";
import Link from "../../../../models/Link";

export async function GET(req: NextRequest) {
  await connect();
  try {
    const url = new URL(req.url); // Parse URL from the request
    const userName = url.searchParams.get("userName"); // Get query parameter
    console.log(userName);
    const query = userName
      ? { $or: [{ userName: userName }, { userName: null }] }
      : { userName: null };
    const links = await Link.find(query);
    if (links) {
      return NextResponse.json(links, {
        status: 200,
      });
    } else {
      return NextResponse.json({ message: "No links found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Failed to fetch data", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
