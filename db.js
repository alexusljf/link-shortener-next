import mongoose from "mongoose";
const uri =
  "mongodb+srv://vercel-admin-user-669f498d2a70ff4d0fb2f2e1:BzGzdJ83nji3TKOT@cluster0.lbswdki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function connect() {
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
