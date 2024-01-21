import { Message } from "whatsapp-web.js";

import {
  BTC_COMMAND_TOKEN,
  EXPENSE_COMMAND_TOKEN,
  UWATT_PRICE_COMMAND_TOKEN,
  handleBtcPrice,
  handleNewExpense,
  handleUWattPrice,
} from "../commands";

export const MessageCommander = async (message: Message) => {
  if (message.body.includes(EXPENSE_COMMAND_TOKEN))
    return handleNewExpense(message);

  if (message.body === BTC_COMMAND_TOKEN) return handleBtcPrice(message);

  if (message.body === UWATT_PRICE_COMMAND_TOKEN)
    return handleUWattPrice(message);

  return message.reply(`Command ${message.body} not found`);
};
