import { Bot, Keyboard } from 'grammy'

const bot = new Bot('7795476268:AAHp-I49ugHelQKOkBBTrlQITsQqevBNjo4')

bot.api.setMyCommands([
    { command: 'start', description: 'Запусти бота' },
    { command: 'all', description: 'Панель' }
])

bot.command('start', async (ctx) => {
    await ctx.reply('Приветсвую меня зовут @NewBotSim')
})
bot.command('all', async (ctx) => {
    const keyboard = new Keyboard().text('Settings').text('About').text('Сыллка на группу автора')
    await ctx.reply('Передаю вам свой пульт!', {
        reply_markup: keyboard
    })
})
bot.hears([/блять/, /сука/, /ебан/, /гондон/, /хуй/, /пизда/], async (ctx) => {
    await bot.api.deleteMessage(ctx.chat.id, ctx.msgId)
    await ctx.reply('Не матерись!')
})

bot.start()