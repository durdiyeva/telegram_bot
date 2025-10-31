// bot.js
const TelegramBot = require('node-telegram-bot-api');

// TOKEN-ni atrof-muhitdan oling (yoki 'YOUR_TOKEN_HERE' bilan almashtiring)
// Eslatma: hech qachon tokenni jamoat joylarda (github, forumlar, chat) joylamang.
const token = process.env.BOT_TOKEN || '7535599772:AAEKlCk2hLCwIOdUTRtZ5L7Xs9zCOme_J4c';

if (!token || token === 'YOUR_TOKEN_HERE') {
  console.error('Iltimos, BOT_TOKEN atrof-muhit o\'zgaruvchisini belgilang.');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = (msg.text || '').trim();
  const firstname = msg.from && msg.from.first_name ? msg.from.first_name : 'Foydalanuvchi';

  if (text === '/start') {
    // Template literal bilan to'g'ri birlashtirish
    bot.sendMessage(chatId, Xushkelibsiz, ${firstname}!, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Sozlamalar ⚙️" }]
        ],
        resize_keyboard: true,
      },
    });
  }
  else if (text === 'Boshlash 🔥') {
    bot.sendMessage(chatId, "Boshlanyaptiii...");
  }
  else if (text === 'Menu 🍔') {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz...");
  }
  else if (text === 'Sozlamalar ⚙️') {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz...");
  }
  else {
    // Agar matn bo'lmasa yoki noma'lum buyruq bo'lsa ham foydali javob
    bot.sendMessage(chatId, "❗️Xatolik yoki noma'lum buyruq. Iltimos /start tugmasini bosing yoki matn yuboring...");
  }
});
