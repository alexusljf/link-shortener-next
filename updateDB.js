import Link from "./src/models/Link.js";
import connect from "./db.js";
const links = [
  {
    longUrl: "https://github.com/alexusljf",
    shortUrl: "https://bit.ly/4bQ9FRS",
    dateCreated: "Tue Jul 16 2024 04:27:44 GMT+0800 (Singapore Standard Time)",
  },
  {
    longUrl: "https://alexusljf.github.io/",
    shortUrl: "https://bit.ly/3xUdffM",
    dateCreated: "Tue Jul 16 2024 04:27:44 GMT+0800 (Singapore Standard Time)",
  },
  {
    longUrl: "https://www.linkedin.com/in/alexuslim/",
    shortUrl: "https://bit.ly/46bkOvi",
    dateCreated: "Tue Jul 16 2024 04:27:44 GMT+0800 (Singapore Standard Time)",
  },
  {
    longUrl: "https://myanimelist.net/animelist/alexushaha",
    shortUrl: "https://bit.ly/3Y2pamd",
    dateCreated: "Tue Jul 16 2024 04:27:44 GMT+0800 (Singapore Standard Time)",
  },
  {
    longUrl: "https://www.youtube.com/watch?v=Iu37OXZ6cHk",
    shortUrl: "https://bit.ly/3S7hBHc",
    dateCreated: "Tue Jul 16 2024 04:27:44 GMT+0800 (Singapore Standard Time)",
  },
];
connect();
const newLink = new Link({ links });
const validationError = newLink.validateSync(); // Sync validation
if (validationError) {
  console.error(validationError);
} else {
  await newLink.save();
  console.log("Data saved successfully!");
}
