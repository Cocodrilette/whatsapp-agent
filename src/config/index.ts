import dotenv from 'dotenv';

dotenv.config();

export default {
  botToken: process.env.BOT_TOKEN,
  commandPrefix: process.env.COMMAND_PREFIX || '!',
};