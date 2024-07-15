import mongoose, { Document, Model } from "mongoose";

// export interface LinkDocument extends Document {
//   links: Array<{
//     longUrl: string;
//     shortUrl: string;
//     dateCreated: string;
//   }>;
// }

const linkSchema = new mongoose.Schema({
  links: [
    {
      longUrl: { type: String, required: true },
      shortUrl: { type: String, required: true },
      dateCreated: { type: String, required: true },
    },
  ],
});

// const Link: Model<LinkDocument> =
//   mongoose.models.Link || mongoose.model<LinkDocument>("Link", linkSchema);

const Link = mongoose.models.Link || mongoose.model("Link", linkSchema);

export default Link;
