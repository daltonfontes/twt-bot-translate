import * as tmi from "tmi.js";
import dotenv from "dotenv";

dotenv.config();


const client = new tmi.Client({
  identity: {
    username: process.env.TWITCH_USERNAME || "",
    password: process.env.TWITCH_OAUTH_TOKEN || "",
  },
  channels: [process.env.TWITCH_CHANNEL || ""]
});
