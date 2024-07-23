import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";
import { nanoid } from "nanoid";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  await connect();
  try {
    const { longUrl } = await req.json();

    if (!longUrl) {
      return NextResponse.json({ error: "Missing longUrl" }, { status: 400 });
    }

    // create a unique id of len 7
    const shortenId = nanoid(7);

    const newLinkPair = {
      longUrl,
      shortUrl: shortenId,
      dateCreated: Date(),
    };

    // Create new record
    const newLink = new Link(newLinkPair);
    console.log({ newLink });
    await newLink.save();

    return NextResponse.json(newLinkPair, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json(
        { error: axiosError.response?.data || "An error occurred with Axios" },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
