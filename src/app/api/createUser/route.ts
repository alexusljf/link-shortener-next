import axios, {AxiosError} from "axios"
import {NextRequest, NextResponse} from "next/server"
import connect from "../../../../db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
	await connect()
	try {
		const {name, userName, password} = await req.json()

		//check if user already exists
		const user = await User.findOne({userName: userName})
		if (user) {
			return NextResponse.json(
				{message: "Username already taken"},
				{status: 400}
			)
		}

		// use bcrypt to hash the password
		const saltRounds = 10
		const hashedPassword = await bcrypt.hash(password, saltRounds)

		const newUserObj = {
			name,
			userName,
			password: hashedPassword, // Store the hashed password as password
		}

		const newUser = new User(newUserObj)
		await newUser.save()

		return NextResponse.json(
			{message: "User Created Successfully", newUserObj},
			{status: 200}
		)
	} catch (error) {
		console.error("Error:", error)

		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError
			return NextResponse.json(
				{error: axiosError.response?.data || "An error occurred with Axios"},
				{status: 500}
			)
		} else {
			return NextResponse.json(
				{error: "An unknown error occurred"},
				{status: 500}
			)
		}
	}
}
