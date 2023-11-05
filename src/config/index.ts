import dotenv from "dotenv";

dotenv.config();

export const config = {
  botToken: process.env.BOT_TOKEN,
  commandPrefix: process.env.COMMAND_PREFIX || "!",
};
