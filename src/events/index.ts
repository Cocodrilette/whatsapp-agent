import { Message } from 'whatsapp-web.js';

// This is a sample event handler for a 'message' event
export const handleMessage = (message: Message) => {
    console.log(`Received message: ${message.body}`);
};

// Add more event handlers as needed