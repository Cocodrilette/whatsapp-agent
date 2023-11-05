import { Client } from 'whatsapp-web.js';
import { config } from './config/index';
import { handleCommand } from './commands/index';
import { handleEvent } from './events/index';

// Initialize the bot
const bot = new Client(config);

// Set up command listener
bot.on('message', message => {
    if (message.body.startsWith(config.prefix)) {
        handleCommand(message);
    }
});

// Set up event listeners
bot.on('qr', (qr) => handleEvent('qr', qr));
bot.on('ready', () => handleEvent('ready'));
bot.on('authenticated', (session) => handleEvent('authenticated', session));
bot.on('auth_failure', msg => handleEvent('auth_failure', msg));
bot.on('disconnected', reason => handleEvent('disconnected', reason));

// Start the bot
bot.initialize();