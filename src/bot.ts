import { Client, LocalAuth } from "whatsapp-web.js";

import { EventType } from "./events/types/events.types";
import { handleMessage } from "./events";
import { handleQr } from "./commands/qr";
import { handleReady } from "./commands/ready";
import { handleAuthenticated } from "./commands/authenticated";

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
bot.on(EventType.Qr, (qr) => handleQr(qr));
bot.on(EventType.Ready, () => handleReady());
bot.on(EventType.Authenticated, () => handleAuthenticated());

// Start the bot
bot.initialize();
