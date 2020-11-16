const { Discord, MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!txc') {
            return true
        }
    }

    static action(message) {
        const attachment = new MessageAttachment('./photos/tauxChomage.png')
        message.channel.send('Voici le graphique du Taux de chommage :money_with_wings: :\n', attachment)
    }
}