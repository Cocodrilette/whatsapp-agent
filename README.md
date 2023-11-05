# WhatsApp Bot

This is a WhatsApp bot built using TypeScript and whatsapp-js.

## Setup

1. Clone the repository to your local machine.
2. Run `pnpm install` to install all the necessary dependencies.
3. Create a `.env` file in the root directory of the project and add your bot token and command prefix.
4. Run `pnpm run build` to compile the TypeScript files into JavaScript.
5. Run `pnpm start` to start the bot.

## Usage

The bot responds to commands sent in WhatsApp messages. The available commands are defined in `src/commands/index.ts`.

Events emitted by the bot are handled in `src/events/index.ts`.

Helper functions used throughout the application are defined in `src/helpers/index.ts`.

The bot's configuration is defined in `src/config/index.ts`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
