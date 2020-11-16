const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Supp extends Command {

    static match (message) {
        if (message.content.startsWith('!sup')) {
            return true
        }
    }

    static action (message) {
        let msg = message.content.split(' ')
        msg.shift()

        if (message.content === '!sup') {
            message.reply('Combien de messages à supprimer ? (max 100)')
        } else {
            let x = parseInt(msg[0], 10)
            if (x > 100) {
                x = 100
            }

            message.delete()
            message.channel.bulkDelete(x)
            message.reply(x + ' message(s) supprimé(s) :x:')
            //message.channel.bulkDelete(1)
        }
    }
}