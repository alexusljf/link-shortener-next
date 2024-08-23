import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import User from "../../../models/User";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const { username, password } = await req.json();
    console.log({ username, password });
    const user = await User.findOne({ userName: username });
    console.log("User found:", user);
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }
    const passwordMatch = user.password === password;
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid Password, please try again" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Login Successful", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
