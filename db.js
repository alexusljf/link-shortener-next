import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
console.log(uri);

async function connect() {
  console.log(uri);
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("bufferTimeoutMS", 60000);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connect;
