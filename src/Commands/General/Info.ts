import { join } from 'path'
import { BaseCommand, Command, Message } from '../../Structures'

@Command('info', {
    description: "Displays bot's info",
    usage: 'info',
    category: 'general',
    cooldown: 10,
    exp: 100
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { description, name, homepage } = require(join(__dirname, '..', '..', '..', 'package.json')) as {
            description: string
            homepage: string
            name: string
        }
        const image = this.client.assets.get('Zerotwo') as Buffer
        const uptime = this.client.utils.formatSeconds(process.uptime())
        const text = `ð§§ *ZeroTwo_Test* ð§§\n\nð *Description: This Bot is in Under devlopment so You can use the orignal repo of this botâð»ð«*\n\nð *Commands:* ${this.handler.commands.size}\n\nð¦ *Uptime:* ${uptime}`
        return void (await reply(image, 'image', undefined, undefined, text, undefined, {
            title: this.client.utils.capitalize(name),
            thumbnail: image,
            mediaType: 1,
            sourceUrl: homepage 
        }))
    }
}
