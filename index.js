const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Help = require('./command/help')
const PIB = require('./command/pib')
const Txc = require('./command/txc')
const Nbc = require('./command/nbc')
const Nbp = require('./command/nbp')
const Git = require('./command/git')
const Sup = require('./command/sup')

//BOT (Photo de profile + Activité
bot.on('ready', function() {
    //bot.user.setAvatar('./photos/terre.png').catch(console.error)
    bot.user.setActivity('!help').catch(console.error)
})

bot.on('message', message => {
    Help.parse(message) //Commande !help
    PIB.parse(message) //Commande !pib
    Txc.parse(message) //Commande !txc
    Nbc.parse(message) //Commande !nbc
    Nbp.parse(message) //Commande !nbp
    Git.parse(message) //Commande !git
    Sup.parse(message) //Commande !sup
})

//bot.login('Nzc1MDEwNDg5NDI3MTY1MjU0.X6gGww.T8dd-cfvvMggfelfjUrV16Kqfhc')
