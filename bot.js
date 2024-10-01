"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot('7795476268:AAHp-I49ugHelQKOkBBTrlQITsQqevBNjo4');
bot.api.setMyCommands([
    { command: 'start', description: 'Start the bot' },
]);
bot.command('start', async (ctx) => {
    await ctx.reply('Приветсвую меня зовут @NewBotSim');
});
bot.hears([/бля/, /сука/, /ебан/, /гондон/, /хуй/, /пизда/], async (ctx) => {
    await bot.api.deleteMessage(ctx.chat.id, ctx.msgId);
    await ctx.reply(`@${ctx.from.username} не матерись!`);
});
bot.hears([/тёма/, /тема/, /артем/], async (ctx) => {
    await ctx.reply('Тема крутой !')
})
bot.start();
