const { Discord, MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!nbi') { //Si le message de l'utilisateur = !nbi alors on retourne vrai
            return true
        }
    }

    static action(message) { //Si on retourne vrai, alors le bot envoie le message + la photo
        const attachment = new MessageAttachment('./photos/nbInfractions.png') //Récupération de la photo
        message.channel.send("Voici le graphique du Nombre d'infractions enregistrées :knife: :\n", attachment)
    }
}