import { Message } from "whatsapp-web.js";
import { handleBtcPrice } from "../commands/btc-price";

// This is a sample event handler for a 'message' event
export const handleMessage = async (message: Message) => {
  if (message.body === "!btc") return handleBtcPrice(message);
};

// Add more event handlers as needed
