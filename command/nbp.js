const { MessageAttachment } = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!nbp') { //Si le message de l'utilisateur = !nbp alors on retourne vrai
            return true
        }
    }

    static action(message) { //Si on retourne vrai, alors le bot envoie le message + la photo
        const attachment = new MessageAttachment('./photos/nbPrisonniers.png') //Récupération de la photo
        message.channel.send('Voici le graphique du Nombre de personne en prison :bank: :\n', attachment)
    }
}