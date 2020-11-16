const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Supp extends Command {

    static match (message) {
        if (message.content.startsWith('!sup')) { //Si le message de l'utilisateur = !sup alors on retourne vrai
            return true
        }
    }

    static action (message) {
        let msg = message.content.split(' ') //Sépare la commande de la valeur
        msg.shift() //Supprimer un élément du tableau et le retourne

        if (message.content === '!sup') { //Si l'utilisateur saisi !sup sans la valeur on le prévient
            message.reply('Combien de messages à supprimer ? (max 100)' +
                'Saisir !sup xx')
        } else {
            let x = parseInt(msg[0], 10)
            if (x > 100) { //Si le nombre saisi est > 100 on le met à 100 (impossible de supprimer plus de 100 messages en une fois avec un bot discord)
                x = 100
            }

            message.delete()
            message.channel.bulkDelete(x) //Supprime les X messages voulus
            message.reply(x + ' message(s) supprimé(s) :x:') //Indique la bonne exécution à l'utilisateur
            //message.channel.bulkDelete(1)
        }
    }
}