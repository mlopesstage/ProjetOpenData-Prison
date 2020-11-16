const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Help = require('./command/help')
const PIB = require('./command/pib')
const Txc = require('./command/txc')
const Nbi = require('./command/nbi')
const Nbp = require('./command/nbp')
const Cog = require('./command/cog')
const Git = require('./command/git')
const Sup = require('./command/sup')

//Paramètres du bot
bot.on('ready', function() {
    bot.user.setAvatar('./photos/terre.png').catch(console.error) //Permets de changer la photo du bot
    bot.user.setActivity('!help').catch(console.error) //Permets de changer le statut du bot
})

//Fait les appels nécessaires en fonction de la commande saisie
bot.on('message', message => {
    Help.parse(message) //Commande !help
    PIB.parse(message) //Commande !pib
    Txc.parse(message) //Commande !txc
    Nbi.parse(message) //Commande !nbi
    Nbp.parse(message) //Commande !nbp
    Cog.parse(message) //Commande !cog
    Git.parse(message) //Commande !git
    Sup.parse(message) //Commande !sup
})

//Token permettant le lancement et la modification du bot sur les serveurs
bot.login('Nzc1MDEwNDg5NDI3MTY1MjU0.X6gGww.ksL" "imP_rjneYGkWnPS54YlbBNc4')
