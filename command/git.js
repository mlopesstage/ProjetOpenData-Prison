const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!git') { //Si le message de l'utilisateur = !git alors on retourne vrai
            return true
        }
    }

    static action(message) { //Si on retourne vrai, alors le bot envoie le message
        message.channel.send('Voici le lien du Github :link: :\n' +
            'https://github.com/mlopesstage/ProjetOpenData-Prison')
    }
}