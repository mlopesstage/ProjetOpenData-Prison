const { Discord, MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!nbc') {
            return true
        }
    }

    static action(message) {
        const attachment = new MessageAttachment('./photos/nbCrimes.png')
        message.channel.send("Voici le graphique du Nombre d'infractions enregistrées :knife: :\n", attachment)
    }
}