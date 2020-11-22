const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {
    static match(message) {
        if (message.content === '!help') { //Si le message de l'utilisateur = !help alors on retourne vrai
            return true
        }
    }

    static action(message) { //Si on retourne vrai, alors le bot retourne un "Embed" comprenant les informations importantes
        let help = new Discord.MessageEmbed()
            .setTitle(':robot: AIDE :robot:') //Titre
            .setDescription(":earth_africa: Bienvenue sur le salon de notre projet d'Open Data :earth_africa:\n") //Description
            .addField('Les auteurs sont :', ':person_raising_hand: Luca GARIC\n' +
                ':man_raising_hand: Michaël LOPES') //Champ 1 : Les auteurs
            .addField('Les pays étudiés sont :', ':flag_de: Allemagne\n' +
                ':flag_at: Autriche\n' +
                ':flag_es: Espagne\n' +
                ':flag_fr: France\n' +
                ':flag_gr: Grèce\n' +
                ':flag_pt: Portugal') //Champ 2 : Les pays
            .addField('Les commandes sont :', ':arrow_right: !pib : Affiche le graphique des PIB\n' +
                ':arrow_right:   !txc : Affiche le graphique du Taux de chômage\n' +
                ":arrow_right:   !nbi : Affiche le graphique du Nombre d'infractions enregistrées\n" +
                ':arrow_right:   !nbp : Affiche le graphique du Nombre de personnes en prison\n' +
                ':arrow_right:   !cog : Affiche le graphique du Nombre du coefficient de Gini\n' +
                ':arrow_right:   !git : Lien vers le GitHub\n' +
                ':arrow_right:   !sup X : Supprimer X message(s) (max 100)') //Champ 3 : Les commandes
            .setColor('00FFE4') //Couleur de l'"embed"
            .setFooter('© Luca GARIC et Michaël LOPES | 2020') //Copyright

        if (message.content === '!help') { //Le bot envoie l'"embed"
            message.channel.send(help)
        }
    }
}