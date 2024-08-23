import mongoose, { Model, Document } from "mongoose";

export interface LinkDocument extends Document {
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
  userName: string;
}

const linkSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  dateCreated: { type: String, required: true },
  userName: { type: String },
});

const Link: Model<LinkDocument> =
  mongoose.models.Link || mongoose.model<LinkDocument>("Link", linkSchema);

export default Link;
