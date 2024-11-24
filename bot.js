"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot('7795476268:AAHp-I49ugHelQKOkBBTrlQITsQqevBNjo4');
const link = `https://www.youtube.com/watch?v=FCHNnZ2KDUQ`;
bot.api.setMyCommands([
    { command: 'start', description: 'Запусти бота' },
    { command: 'main', description: 'Панель' }
]);
bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Приветсвую меня зовут @NewBotSim');
}));
bot.command('main', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const mainkeyboard = new grammy_1.InlineKeyboard().webApp('App', link);
    yield ctx.reply('Передаю вам свой пульт!', {
        reply_markup: mainkeyboard
    });
}));
bot.hears([/блять/, /сука/, /ебан/, /гондон/, /хуй/, /пизда/], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield bot.api.deleteMessage(ctx.chat.id, ctx.msgId);
    yield ctx.reply('Не матерись!');
}));
bot.hears('О нас', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Автор бота:@simfort');
}));
bot.hears('Сыллка на группу автора', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('https://t.me/getcode_front');
}));
bot.start();
