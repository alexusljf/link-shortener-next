import mongoose from "mongoose"
const uri = process.env.MONGODB_URI

async function connect() {
	try {
		await mongoose.connect(uri)
		mongoose.set("bufferTimeoutMS", 60000)
		console.log("Connected to MongoDB")
	} catch (error) {
		console.error("MongoDB connection error:", error)
	}
}

export default connect
