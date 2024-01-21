import { Client, LocalAuth } from "whatsapp-web.js";

import { MessageCommander } from "./events";
import { EventType } from "./events/types/events.types";
import { handleQr, handleReady, handleAuthenticated } from "./commands";

const bot = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

bot.on(EventType.Message, (message) => MessageCommander(message));

bot.on(EventType.Qr, (qr) => handleQr(qr));
bot.on(EventType.Ready, () => handleReady());
bot.on(EventType.Authenticated, () => handleAuthenticated());

bot.initialize();
