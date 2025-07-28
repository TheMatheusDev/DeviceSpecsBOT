import { Bot } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Hello World!"));

bot.start();

bot.catch((err) => {
  console.error("Error in bot:\n", err);
});
