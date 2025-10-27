import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7535599772:AAEKlCk2hLCwIOdUTRtZ5L7Xs9zCOme_J4c"

const bot = new TelegramBot (TOKEN, {polling: true})

bot.on("message", function(msg){
    const chatId = msg.chat.id;
    bot.sendMessage(chatId,"Salom")
})

console.log("bot ishga tushdi")