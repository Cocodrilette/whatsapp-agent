require("dotenv").config();

import OpenAI from "openai";
import { Client, LocalAuth } from "whatsapp-web.js";

import { MessageCommander } from "./events";
import { EventType } from "./events/types/events.types";
import { handleQr, handleReady, handleAuthenticated } from "./commands";
import { config } from "./config";

const bot = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

const openAI = new OpenAI({
  apiKey: config.openAI.apiKey,
});

bot.on(EventType.Message, (message) =>
  MessageCommander(message, openAI).catch((error) => console.error(error))
);

bot.on(EventType.Qr, (qr) => handleQr(qr));
bot.on(EventType.Ready, () => handleReady());
bot.on(EventType.Authenticated, () => handleAuthenticated());

bot.initialize();
