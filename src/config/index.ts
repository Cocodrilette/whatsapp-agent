export const config = {
  botToken: process.env.BOT_TOKEN,
  commandPrefix: process.env.COMMAND_PREFIX || "!",
  openAI: {
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo"
  }
};
