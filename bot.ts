import { Bot, InlineKeyboard, Keyboard } from 'grammy'

const bot = new Bot('7795476268:AAHp-I49ugHelQKOkBBTrlQITsQqevBNjo4')

bot.api.setMyCommands([
    { command: 'start', description: 'Запусти бота' },
    { command: 'main', description: 'Панель' }
])

bot.command('start', async (ctx) => {
    await ctx.reply('Приветсвую меня зовут @NewBotSim')
})
bot.command('main', async (ctx) => {
    const mainkeyboard = new InlineKeyboard()
    await ctx.reply('Передаю вам свой пульт!', {
        reply_markup: mainkeyboard
    })
})

bot.hears([/блять/, /сука/, /ебан/, /гондон/, /хуй/, /пизда/], async (ctx) => {
    await bot.api.deleteMessage(ctx.chat.id, ctx.msgId)
    await ctx.reply('Не матерись!')
})
bot.hears('О нас', async (ctx) => {
    await ctx.reply('Автор бота:@simfort')
})
bot.hears('Сыллка на группу автора', async (ctx) => {
    await ctx.reply('https://t.me/getcode_front')
})

bot.start()