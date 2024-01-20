import {Telegraf, Markup} from 'telegraf'
import {message} from 'telegraf/filters'

const token = '6921348960:AAHE1LwQlTzBvsRXWC3yQ5eZjw8k8oNvysI'
const webAppUrl = 'https://angular-tg-app-f8857.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    console.log('Received /start command');
    ctx.reply(
        // 'Вітаємо! Натисніть нижче, щоб запустити додаток',
        'Здоров Танюха',
        Markup.keyboard([ 
            Markup.button.webApp(
                'Відправити повідомлення',
                `${webAppUrl}/feedback`),
            ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()
  
