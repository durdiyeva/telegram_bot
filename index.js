import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7535599772:AAEKlCk2hLCwIOdUTRtZ5L7Xs9zCOme_J4c";

const bot = new TelegramBot(TOKEN, { polling: true });

let lambophotoURL = "./imeges/rasm.jpg";
let taomlarphotoURL = "./imeges/download (2).jpg"

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
 reply_markup: {
  inline_keyboard: [
    [
      {text: "Rasmlar" , callback_data: "photos"},
      {text: "Batafsil" , callback_data: "info"}
    ],
    [
      {text: "sotib olish" , callback_data: "buy"}
    ],
  ],
 }
    });
   }, 1000)
  } else if (text == "Menu 🥩") {

    const xabarr = await bot.sendMessage(chatId, "iltimos yana biroz kuting....");
    setTimeout(function (){
      bot.deleteMessage(chatId, xabarr.message_id);

      bot.sendPhoto(chatId,taomlarphotoURL,{
        caption:`
       🥩 bugungi menyudan xohlagan taomingizni tanglang`,
       reply_markup:{
        inline_keyboard: [
          [
            {text: "🌯lavash" , callback_data: "lavashfastfood"},
            {text: "🍔chizburger", callback_data: "chizburgerfastfood"}
          ],
           [
            {text: "🌮sendwich" , callback_data: "sendwichfastfood"},
            {text: "🍕pizza", callback_data: "pizzafastfood"}
          ],
           [
            {text: "🌭hot-dog" , callback_data: "hot-dogfastfood"},
            {text: "🥓shashlik", callback_data: "shashlikfood"}
          ]
        ]
       }
      } )
    });


  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

bot.on("callback_query", function (query) {
  const chatId = query.message.chat.id;
  const firstName = query.message.chat.first_name;
  const data = query.data;
  
  console.log(`chatId: ${chatId} ==> data: ${data}`);
  if (data == "photos") {
    bot.sendMessage(chatId, "Rasmlar");
  } else if (data == "info") {
    bot.sendMessage(chatId, "Batafsil ma'lumot");
  } else if (data == "buy") {
    bot.sendMessage(
      chatId,
      `Hurmatli ${firstName},
Siz lamborghini sotib olish uchun Avazbekga $180,000 berdingizmi?
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Tasdiqlash ✅", callback_data: "yes_lambo" },
              { text: "Bekor qilish ❌", callback_data: "cancel_lambo" },
            ],
          ],
        },
      }
    );
  } else if (data == "yes_lambo") {
    bot.sendMessage(
      chatId,
      `Tabriklaymiz ${firstName}, siz Lamborghini sotib oldingiz! 🎉`
    );
  } else if (data == "cancel_lambo") {
    bot.sendMessage(chatId, `Buyurtma muvaffaqiyatli bekor qilindi! ❌`);
  }

  // console.log(query);
});

bot.on("callback_query", function (query) {
  const chatId = query.message.chat.id;
  const firstName = query.message.chat.first_name;
  const data = query.data;

  console.log(`chatId: ${chatId} ==> data: ${data}`);
  if (data == "lavashfastfood"){
    bot.sendMessage (chatId, "🌯lavash");
  }else if (data == "chizburgerfastfood"){
    bot.sendMessage(chatId, "🍔chizburger");
  }else if (data == "🌮sendwich"){
    bot.sendMessage(chatId, "sendwichfastfood");
  }else if (data == "🍕pizza"){
    bot.sendMessage(chatId, "pizzafastfood");
  }else if (data == "🌭hot-dog"){
    bot.sendMessage(chatId, "hot-dogfastfood");
  }else if (data == "🥓shashlik"){
    bot.sendMessage(chatId, "shashlikfood");
  }


})


// npm install nodemon --save-dev

console.log("Bot ishga tushdi  ");


