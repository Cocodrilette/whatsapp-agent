import { Message } from "whatsapp-web.js";

export const EXPENSE_COMMAND_TOKEN = ".expense";

export async function handleNewExpense(message: Message) {
  const [command, description, amount, ...rest] = message.body.split("\n");

  if (isValidMessage([command, description, amount])) {
    const parsedDescription = getDescription(description);
    const parsedAmount = getAmount(amount);

    const success = saveExpense(parsedDescription, parsedAmount);

    if (success) {
      return message.reply(
        `Expense *${parsedDescription}* with amount *${parsedAmount}* saved`
      );
    } else {
      return message.reply(`Error saving expense`);
    }
  } else {
    return message.reply(`Invalid command`);
  }
}

function getDescription(description: string) {
  if (description === "") return "No description";
  return description.trim();
}

function getAmount(amount: string) {
  return Number(amount);
}

function saveExpense(description: string, amount: number) {
  const newExpense = {
    description,
    amount,
    date: new Date(),
  };

  console.log({ newExpense });

  // save to db

  // send message to chat

  // send message to user

  return true;
}

function isValidMessage([first, second, third]: string[]) {
  return (
    isValidFirstLine(first) &&
    isValidSecondLine(second) &&
    isValidThirdLine(third)
  );
}

function isValidFirstLine(first: string) {
  return first === ".expense";
}

function isValidSecondLine(second?: string) {
  if (typeof second === "undefined") return false;
  return true;
}

function isValidThirdLine(third?: string) {
  if (isNaN(Number(third))) return false;
  return true;
}
