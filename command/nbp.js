const { Discord, MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!nbp') {
            return true
        }
    }

    static action(message) {
        const attachment = new MessageAttachment('./photos/nbPrisonniers.png')
        message.channel.send('Voici le graphique du Nombre de personne en prison :bank: :\n', attachment)
    }
}
