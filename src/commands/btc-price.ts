import axios from "axios";
import { Message } from "whatsapp-web.js";
import { btcToUsd } from "../helpers/btc-to-usd";

export const BTC_COMMAND_TOKEN = ".btc";

export async function handleBtcPrice(message: Message) {
  console.log({ from: message.from });

  const res = await axios.get(
    "https://blockchain.info/tobtc?currency=USD&value=1"
  );

  return message.reply(`*1 BTC* = *${btcToUsd(res.data)} USD*`);
}
