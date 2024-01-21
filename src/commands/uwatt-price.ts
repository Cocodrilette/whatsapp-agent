import { Message } from "whatsapp-web.js";

export const UWATT_PRICE_COMMAND_TOKEN = ".uwatt-price";

export async function handleUWattPrice(message: Message) {
  const req = await fetch("https://www.cocodrilette.xyz/api/u-watt/price");
  const res = await req.json();

  return message.reply(`*1 UWATT* = *${res.price} USD*`);
}
