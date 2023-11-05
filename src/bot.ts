import qrcode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

import { EventType } from "./events/types/events.types";
import { handleMessage } from "./events";

// Initialize the bot
const bot = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

// Set up command listener
bot.on(EventType.Message, (message) => handleMessage(message));

// Set up event listeners
bot.on(EventType.Qr, (qr) => qrcode.generate(qr, { small: true }));
bot.on(EventType.Ready, () => console.log("Bot is ready!"));
bot.on(EventType.Authenticated, (session) =>
  console.log("Bot is authenticated!", session)
);

// Start the bot
bot.initialize();
