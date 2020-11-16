const { MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!cog') { //Si le message de l'utilisateur = !cog alors on retourne vrai
            return true
        }
    }

    static action(message) { //Si on retourne vrai, alors le bot envoie le message + la photo
        const attachment = new MessageAttachment('./photos/coeffGini.png') //Récupération de la photo
        message.channel.send('Voici le graphique du Coefficient de Gini :100: :\n', attachment)
    }
}