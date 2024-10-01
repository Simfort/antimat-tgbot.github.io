import { Bot } from 'grammy'

const bot = new Bot('7795476268:AAHp-I49ugHelQKOkBBTrlQITsQqevBNjo4')

bot.api.setMyCommands([
    { command: 'start', description: 'Start the bot' },
])

bot.command('start', async (ctx) => {
    await ctx.reply('Приветсвую меня зовут @NewBotSim')
})
bot.hears([/блять/, /сука/, /ебан/, /гондон/, /хуй/, /пизда/], async (ctx) => {
    await bot.api.deleteMessage(ctx.chat.id, ctx.msgId)
    await ctx.reply('Не матерись!')
})

bot.start()