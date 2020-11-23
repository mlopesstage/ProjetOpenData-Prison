Bienvenue dans le projet d'Open Data sur le milieu carcéral.
Ce projet a été réalisé par Michaël LOPES et Luca GARIC.

Nous avons développé et testé cette application sur Windows.

1. Préparation du Bot :
	a. Se créer un compte discord.

	b. Créer un serveur. Pour cela, cliquer sur "Ajouter un serveur" et sélectionner n'importe lesquels des choix proposés.

	c. Sur un navigateur copier-coller ce lien :
		https://discord.com/api/oauth2/authorize?client_id=775010489427165254&permissions=522336&scope=bot

	d. Se connecter et choisir le serveur que vous venez de créer.

	e. Autoriser les permissions.

	f. Votre bot est maintenant sur votre serveur.


2. Utilisation de l'application :
	a. Tout d'abord il faut télécharger et installer Node.js sur votre ordinateur.
		https://nodejs.org/fr/

	b. Suite à la sécurité de discord il faudra modifier le fichier "index.js" dans le dossier du projet, grâce à un éditeur de texte (bloc-notes).
		Tout en bas du fichier, là où il y a écrit "bot.login" supprimer *** au mileu de la chaîne de lettres et chiffres.
		Vous aurez donc ...DXJZir... au lieu de ...DXJ***Zir...

	c. Ensuite ouvrez un invité de commande
		Cliquer sur la barre de recherche Windows
		Taper : cmd
		Choisir "Invite de commandes"

	d. Déplacez-vous pour aller dans le dossier contenant le code du projet.
		Par exemple si le dossier est sur votre bureau saisir :
			cd Desktop\ProjetOpenData

	e. Enfin saisir la commande :
		node index.js
	/!\ Ne pas fermer l'invite de commande /!\

	f. Vous pouvez enfin tester le bot. Pour afficher l'aide, saisir dans le chat du channel "!help".

	g. Pour déconnecter le bot faire ctrl + c dans l'invite de commande.


3. Pour changer la version des images :
	/!\ Il vous faudra le pack office de microsoft avec Excel d'installer /!\

	a. Dans le repertoire du projet, aller dans le dossier "donnees".

	b. Ouvrir le tableur "tableurDonnees".

	c. Une fois ouvert, cliquer sur "Activer la modification" dans la banière jaune en haut, puis sur "Activiter le contenu" pour activer les macros.
		Si l'étape ne s'effectue pas correctement chez vous, vous pouvez aller dans "fichier" -> "option" -> "Centre de gestion de la confidentialité" -> "Paramètres" -> "Paramètres des macros" -> "activer les macros"

	d. Modifier les valeurs des tableaux si vous voulez.

	e. Sur l'onglet "menu", cliquer sur les boutons "Générer...", pour générer chacun des graphiques.

	f. Cliquer sur le graphique souhaité, puis sur le bouton "Exporter..." correspondant.