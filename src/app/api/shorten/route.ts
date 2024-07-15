import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import Link from "../../../models/Link";

export async function POST(req: NextRequest) {
  await connect(); // Connect to MongoDB
  try {
    const { longUrl } = await req.json();
    const accessToken = process.env.ACCESS_TOKEN;

    if (!longUrl) {
      return NextResponse.json({ error: "Missing longUrl" }, { status: 400 });
    }

    const response = await axios.post(
      "https://api-ssl.bitly.com/v4/shorten",
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Update MongoDB - Add new link to the array
    const newLinkPair = {
      longUrl,
      shortUrl: response.data.link,
      dateCreated: Date(),
    };
    const existingLinks = await Link.findOne();
    if (existingLinks) {
      // Update existing record
      existingLinks.links.push(newLinkPair);
      await existingLinks.save();
    } else {
      // Create new record
      const newLinks = new Link({ links: [newLinkPair] });
      await newLinks.save();
    }

    return NextResponse.json(response.data, { status: 200 });
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
