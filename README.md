# WhatsApp Bot

This is a WhatsApp bot built using TypeScript and whatsapp-js.

## Setup

1. Clone the repository to your local machine.
2. Run `pnpm install` to install all the necessary dependencies.
3. Create a `.env` file in the root directory of the project and add your bot token and command prefix.
4. Run `pnpm run build` to compile the TypeScript files into JavaScript.
5. Run `pnpm start` to start the bot.

> ⚠️ If you want to install whatsapp-web.js on a system without GUI (for example linux server images that can just be accessed over a shell and dont have something like a desktop) there are a couple of things you need to do so puppeteer can emulate the chromium browser. ⚠️

_The steps below only apply in the above scenario_

6. For puppeteer to work, you need to install the following dependencies:

```bash
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

7. You will also need to set the --no-sandbox flag in the puppeteer launch command.

```js
...
new Client({
	...,
	puppeteer: {
		args: ['--no-sandbox'],
	}
})
...
```

> ⚠️ If you are running your program with root privileges, you should also use the --disable-setuid-sandbox flag since chromium doesn't support running root with no sandbox by default. ⚠️

## Usage

The bot responds to commands sent in WhatsApp messages. The available commands are defined in `src/commands/index.ts`.

Events emitted by the bot are handled in `src/events/index.ts`.

Helper functions used throughout the application are defined in `src/helpers/index.ts`.

The bot's configuration is defined in `src/config/index.ts`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
