import {NextRequest, NextResponse} from "next/server"
import connect from "../../../../db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
	await connect()
	try {
		const {username, password} = await req.json()
		console.log({username, password})
		const user = await User.findOne({userName: username})
		if (!user) {
			return NextResponse.json({message: "User does not exist"}, {status: 400})
		}
		const passwordMatch = await bcrypt.compare(password, user.password)
		if (!passwordMatch) {
			return NextResponse.json(
				{message: "Invalid Password, please try again"},
				{status: 400}
			)
		}
		return NextResponse.json({message: "Login Successful", user}, {status: 200})
	} catch (error) {
		return NextResponse.json({error: "Failed to delete data"}, {status: 500})
	}
}
