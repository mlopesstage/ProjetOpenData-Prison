const { Discord, MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!pib') {
            return true
        }
    }

    static action(message) {
        const attachment = new MessageAttachment('./photos/PIB.png')
        message.channel.send('Voici le graphique du PIB par habitant :moneybag: :\n', attachment)
    }
}