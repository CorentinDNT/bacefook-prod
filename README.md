# :computer: :sparkles: Le réseau social Bacefook ! :sparkles: :computer:
## Projet M.E.R.N -> MongoDB / Express / React & Redux / Node
## Quelques screenshots du site: 

### Tout d'abord la page d'accueil qui nous offre toutes les possibilitées suivantes
* Poster un article avec un avec ou sans image / vidéo youtube
* Aimer ou commenter les autres posts et voir le nombres de likes
* Avoir un apperçu des trois meilleurs posts de la page "Trendings" (tendences) dans un petit menu sur le coté
* Un menu suggestions d'amis qui vous propose des gens que vous ne suivez pas encore
* Et un accès a votre profil en cliquant soit sur votre nom en haut a droite soit sur l'icon profil
* Jouer les vidéos des posts

![main page overview](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/main-page-overview.png)

<img align="right" width="30%" alt="" src="https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/trending-suggestion-sideMenu.png"></img>

### Ensuite les deux menu interactifs sur le coté droit de l'écrant
1. Le menu trending permet de voir les trois posts les plus aimés de tous les temps, avec la photo de profil de l'utilisateur ayant posté ainsi qu'un apperçu du texte.
2. Le menu suggestions qui affiche des gens qu hasard, avec leurs nom et leurs photo de profil que l'on n'as pas encore suivi, ce menu est interractif, il est possible de cliquer sur le bouton suivre et une autre personne sera alors affiché (dans la limite du nombre de profil disponible)

Ces deux menus sont responsive et disparaissent lorsqu'ils n'ont plus assez de place pour être affiché a l'écrant.


*
*
*
*
*
*
*
*

### La partie post: 

* Il est possible d'inclure une image en cliquant sur la petite icone en bas a gauche ou une video youtube en y insérant le lien ou, simplement du texte.
* Une prévisualisation du post se feras en direct.
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/post-preview.png)

### Les commentaires / Likes
* En cliquant sur l'incone commentaire en bas a gauche d'un post, il est possible d'afficher tous les commentaires existants et d'en envoyer un.
* Un compteur de likes est visible au centre du post en dessous de l'image et le coeur deviendras rouge si vous avez cliquer sur j'aime !
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/comments-overview.png)

### Il est possible de modifier ou de supprimer un de ses post en cliquand sur un des deux boutons en bas a droite de ce dernier
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/editing-deleting-self-posts.png)

### La page trending
* Voici un apperçu de la page "Tendences" qui repertorie les 5 posts les plus aimés du site.
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/trending-page.png)

### Et pour finir la page profil
#### voici une vue générale de la page profil, on peut y trouver
* La Bio de l'auteur
* Sa photo de profil
* La possibilité de modifier la photo de profil
* Un bouton pour modifier sa bio
* Le nombres d'abonnés
* Le nombres de follower (cliquable poour ouvrir le menu)
* La date depuis laquelle le profil a été créer
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/profil-page.png) 

#### Voici un apperçu des menu d'abonnements / abonnés quand le menu est fermé
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/sub-follow-overview.png)

#### Voici un apperçu des menu d'abonnements / abonnés quant on a cliqué sur le menu en question et que la modale s'ouvre
![](https://github.com/CorentinDNT/bacefook-prod/blob/main/client/public/img/ScreenShots/follow-modale-overview.png)

*réalisé a l'aide d'un exercice*


## Comment cloner ce Bacefook et la base de données ?

### Configuration du back-end :

1. Tout d'abord, créer un cluster sur MongoDB
2. Une fois créer connectez-vous a celui-ci sur Mongo-Compass et insérez-y les deux fichiers trouvables [ici](https://github.com/CorentinDNT/bacefook-prod/tree/main/Database_Stuffs) : 
3. Se connecter a ce cluster e, y rentrant les informatios dans ```/config/db.js```
4. Créer un fichier ``.env`` dans le dossier ``/config/`` avec les variables suivantes :
* PORT=5000
* DB_USER_PASS=``votre identifiant et mot de passe au cluster``
* TOKEN_SECRET=``un clé généré aléatoirement, sécurisé``
* CLIENT_URL=http://localhost:3000``Ou alors votre url client``
* Dans votre termial faites ``npm i``
* Enfin, lancez le serveur avec la commande ```npm start``

### Configuration du front-end :
1. Créer un fichier ``.env`` qui contient
* REACT_APP_API_URL=http://localhost/  ``Ou alors votre url serveur``
* Dans un nouveau terminal faites la commande ``npm i``
* Une fois l'installation terminée faire la commande ``cd client\`` + ``npm start``
