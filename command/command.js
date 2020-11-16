module.exports = class Command { //Classe principale permettant la récupération du message saisi par l'utilisateur et l'envoie de la réponse
    static parse(message) {
        if (this.match(message)) {
            this.action(message)
            return true
        }
        return false
    }

    static match(message) {
        return false
    }

    static action(message){

    }
}