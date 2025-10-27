import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7535599772:AAEKlCk2hLCwIOdUTRtZ5L7Xs9zCOme_J4c"

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const firstname = msg.chat.first_name;
    if (text == "/start") {
        bot.sendMessage(chatId, `xush kelibsiz, ${firstname}`, {
            reply_markup: {
                keyboard: [
                    [{ text: "boshlash" }],
                    [{ text: "menu" }, { text: "sozlamalar" }],
                ],
                resize_keyboard: true,
            },
        });
    } else if (text == "boshlash")
})

console.log("bot ishga tushdi")