import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../db";
import User from "../../../models/User";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const { name, userName, password } = await req.json();
    const newUserObj = {
      name,
      userName,
      password,
    };

    const user = await User.findOne({ userName: userName });
    if (user) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 400 }
      );
    }
    const newUser = new User(newUserObj);
    await newUser.save();

    return NextResponse.json(
      { message: "User Created Successfully", newUserObj },
      { status: 200 }
    );
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
