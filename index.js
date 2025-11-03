import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7535599772:AAEKlCk2hLCwIOdUTRtZ5L7Xs9zCOme_J4c";

const bot = new TelegramBot(TOKEN, { polling: true });

let lambophotoURL = "./imeges/rasm.jpg";

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🥩" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
   const xabar = await bot.sendMessage(chatId, "Iltimos kuting...");
   setTimeout(function () {
    bot.deleteMessage(chatId, xabar.message_id);

    bot.sendPhoto(chatId, lambophotoURL, {
      caption:`
🔹 Ishlab chiqaruvchi: Lamborghini (Italiya)
🔹 Model: Centenario LP770-4
🔹 Chiqarilgan yili: 2016-yil (cheklangan seriya)
🔹 Dvigatel: 6.5 litrli V12, atmosferali
🔹 Quvvat: 770 ot kuchi
🔹 Uzatuv tizimi: 7 pog'onali ISR (dual-clutch) avtomatik, to‘liq yuritma (AWD)
🔹 Tezlanish (0–100 km/soat): 2.8 soniya
🔹 Maksimal tezlik: 350 km/soatdan ortiq
🔹 Ishlab chiqarilgan soni: atigi 40 dona (20 kupé, 20 roadster)

Qiziqarli fakt:
Centenario modeli Lamborghini asoschisi Ferruccio Lamborghini’nin 100 yilligiga bag‘ishlab yaratilgan. U Aventador platformasiga asoslangan, lekin aerodinamikasi va dizayni yanada ilg‘or.
`,
    });
   }, 1000)
  } else if (text == "Menu 🥩") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz....");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

// npm install nodemon --save-dev

console.log("Bot ishga tushdi  ");


