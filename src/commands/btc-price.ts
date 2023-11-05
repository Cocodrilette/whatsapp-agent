import axios from "axios";
import { Message } from "whatsapp-web.js";

export async function handleBtcPrice(message: Message) {
  console.log({ from: message.from });

  const res = await axios.get(
    "https://blockchain.info/tobtc?currency=USD&value=1"
  );

  return message.reply(`*1 BTC* = *${res.data}*`);
}
