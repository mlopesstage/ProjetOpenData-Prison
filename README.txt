Bienvenue dans le projet d'Open Data sur le milieu carcéral.
Ce projet a été réalisé par Michaël LOPES et Luca GARIC.

Nous avons développé et testé cette application sur Windows.

1. Préparation du Bot :
	a. Se créer un compte discord.

	b. Créer un serveur. Pour cela, cliquer sur "Ajouter un serveur"
	et sélectionner n'importe lesquels des choix proposés.

	c. Sur un navigateur copier-coller ce lien
		https://discord.com/api/oauth2/authorize?client_id=775010489427165254&permissions=522336&scope=bot

	d. Se connecter et choisir le serveur que vous venez de créer

	e. Autoriser les permissions

	f. Votre bot est maintenant sur votre serveur.



2. Utilisation de l'application :
	a. Tout d'abord il faut télécharger et installer Node.js sur votre ordinateur
	https://nodejs.org/fr/


	b. Suite a la sécurité de discord nous ne pouvons mettre la clé de connexion dans le code.
	Afin de tester le code il faudra donc ouvrir "index.js" dans le dossier du projet.
	Tout en bas la où il y a écrit "bot.login" saisir "Nzc1MDEwNDg5NDI3MTY1MjU0.X6gGww.YQS3ZUg9PcCojNoT5_hk2Roz3sM" au lieu de "Saisir ici la clé"


	b. Ensuite ouvrez un invité de commande
	Cliquer sur la bare de recherche Windows
	Taper : cmd
	Choisir "Invite de commandes"

	c. Déplacez-vous pour aller dans le dossier contenant le code du projet
	Par exemple si le dossier est sur votre bureau saisir :
		cd Desktop\ProjetOpenData

	d. Enfin saisir la commande :
		node index.js
	/!\ Ne pas fermer l'invite de commande /!\

	e. Vous pouvez enfin tester le bot. Pour afficher l'aide, saisir dans le chat du channel "!help".

	f. Pour déconnecter le bot faire ctrl + c dans l'invite de commande.