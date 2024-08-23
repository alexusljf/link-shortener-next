import mongoose, { Model, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  userName: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const User: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);

export default User;
