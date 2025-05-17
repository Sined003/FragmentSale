
# Telegram Notify Bot (Node.js)

A simple Node.js project to send notifications via Telegram using the [Telegraf](https://telegraf.js.org/) library.

---

## Features

- Send messages/notifications to Telegram users or groups
- Easy to set up and extend
- Uses modern and popular Telegraf library
- Can be integrated with any Node.js application or service

---

## Prerequisites

- Node.js v14 or higher
- A Telegram bot token (create one via [BotFather](https://t.me/BotFather))
- Chat ID or user ID to send notifications to

---

## Installation

1. Clone this repository or copy the source code.

2. Install dependencies:

```
npm install telegraf
```

---

## Usage

1. Replace `YOUR_TELEGRAM_BOT_TOKEN` in the code with your Telegram bot token.

2. Replace `CHAT_ID_OR_USER_ID` with the Telegram chat or user ID where you want to send notifications.

3. Run the script:

```
node index.js
```

---

## Example Code Snippet

```
const { Telegraf } = require('telegraf');

const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

async function sendNotification(chatId, message) {
  try {
    await bot.telegram.sendMessage(chatId, message);
    console.log('Notification sent');
  } catch (error) {
    console.error('Failed to send notification:', error);
  }
}

const chatId = 'CHAT_ID_OR_USER_ID';
const message = 'Hello! This is a notification from your Node.js bot.';

sendNotification(chatId, message);

bot.launch();
```

---

## Getting Chat ID

To get your chat ID, you can:

- Send a message to your bot.
- Add a message handler in your bot code to log incoming chat IDs.

Example:

```
bot.on('message', (ctx) => {
  console.log('Chat ID:', ctx.chat.id);
});
```

---

## License

This project is licensed under the MIT License.
-notify-wit-pfT9FEIFQ6KHFbGipNWDbQ?utm_source=copy_output
