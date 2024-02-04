import OpenAI from "openai";
import { Chat, Message } from "whatsapp-web.js";

import {
  BTC_COMMAND_TOKEN,
  EXPENSE_COMMAND_TOKEN,
  UWATT_PRICE_COMMAND_TOKEN,
  handleBtcPrice,
  handleNewExpense,
  handleUWattPrice,
} from "../commands";
import { ChatCompletionMessageParam } from "openai/resources";
import { config } from "../config";

const SYSTEM_MESSAGE: ChatCompletionMessageParam = {
  role: "system",
  content: ""
}

const pastMessages: ChatCompletionMessageParam[] = []

export const MessageCommander = async (message: Message, openAI: OpenAI) => {
  if (message.body.includes(EXPENSE_COMMAND_TOKEN))
    return handleNewExpense(message);

  if (message.body === BTC_COMMAND_TOKEN) return handleBtcPrice(message);

  if (message.body === UWATT_PRICE_COMMAND_TOKEN)
    return handleUWattPrice(message);

  const chat = await message.getChat()
  return sendWithCompletition(chat, message, openAI)
};

async function sendWithCompletition(chat: Chat, message: Message, openAI: OpenAI) {
  const incomingMsg: ChatCompletionMessageParam = {
    role: "user",
    content: message.body
  }

  pastMessages.push(incomingMsg)
  const completition = await openAI.chat.completions.create({
    messages: [
      SYSTEM_MESSAGE,
      ...pastMessages,
      incomingMsg
    ],
    model: config.openAI.model,
  })
  const completitionContent = completition.choices[0].message.content ?? ''

  const assistanceMessage: ChatCompletionMessageParam = {
    role: "assistant",
    content: completitionContent
  }
  pastMessages.push(assistanceMessage)

  return chat.sendMessage(completitionContent)
}
