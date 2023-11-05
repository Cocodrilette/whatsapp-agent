import { Client } from "whatsapp-web.js";
import { handleEvent } from "./events";

// Initialize the bot
const bot = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

// Set up command listener
bot.on("message", (message) => {
  console.log("message received", message);
});

// Set up event listeners
bot.on("qr", (qr) => handleEvent(qr));
bot.on("ready", () => handleEvent("ready"));
bot.on("authenticated", (session) => handleEvent(session));
bot.on("auth_failure", (msg) => handleEvent(msg));
bot.on("disconnected", (reason) => handleEvent(reason));

// Start the bot
bot.initialize();
