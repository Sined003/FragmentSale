// Import Telegraf
const { Telegraf } = require('telegraf');

// Your Telegram bot token from BotFather
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create bot instance
const bot = new Telegraf(botToken);

// Function to send a notification message to a chat ID
async function sendNotification(chatId, message) {
  try {
    await bot.telegram.sendMessage(chatId, message);
    console.log('Notification sent');
  } catch (error) {
    console.error('Failed to send notification:', error);
  }
}

// Example usage: send a notification
const chatId = 'CHAT_ID_OR_USER_ID'; // Replace with target chat ID
const message = 'Hello! This is a notification from your Node.js bot.';

sendNotification(chatId, message);

// Optional: start bot polling if you want to listen to messages or commands
bot.launch();
