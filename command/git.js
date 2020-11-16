const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!git') {
            return true
        }
    }

    static action(message) {
            message.channel.send('Voici le lien du Github :link: :\n' +
                'https://github.com/')
    }
}