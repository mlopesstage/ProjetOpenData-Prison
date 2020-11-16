const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!help') {
            return true
        }
    }

    static action(message) {
        let help = new Discord.MessageEmbed()
            .setTitle(':robot: AIDE :robot:')
            .setDescription(":earth_africa: Bienvenue sur le salon de notre projet d'Open Data :earth_africa:\n")
            .addField('Les auteurs sont :', ':person_raising_hand: Luca GARIC\n' +
                ':man_raising_hand: Michaël LOPES')
            .addField('Les pays étudiés sont :', ':flag_de: Allemagne\n' +
                ':flag_at: Autriche\n' +
                ':flag_es: Espagne\n' +
                ':flag_fr: France\n' +
                ':flag_gr: Grèce\n' +
                ':flag_pt: Portugal')
            .addField('Les commandes sont :', ':arrow_right: !pib : Affiche le graphique des PIB\n' +
                ':arrow_right:   !txc : Affiche le graphique du Taux de chômage\n' +
                ":arrow_right:   !nbc : Affiche le graphique du Nombre d'infractrions enregistrées\n" +
                ':arrow_right:   !nbp : Affiche le graphique du Nombre de personnes en prison\n' +
                ':arrow_right:   !git : Lien vers le GitHub\n' +
                ':arrow_right:   !sup X : Supprimer X message(s) (max 100)')
            .setColor('00FFE4')
            .setFooter('© Luca GARIC et Michaël LOPES | 2020')

        let msg = message.content.split(' ')
        msg.shift()

        if (message.content === '!help') {
            message.channel.send(help)
        }
    }
}