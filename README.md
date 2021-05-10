# Projet IFOCOP Hôtel Chambord

## <span style="color: red"> Important </span>
<h5 style="color: forestgreen"> lire la documentation </h5>

lien https://hotel-chambord.nicolas-zanardo.com/

lien https://jflepantewebdev.go.yj.fr/

## Utilisation du serveur interne webpack

```bash
# Dans le fichier webpack.config.js mettre le fichier en mode production
////////
   mode: "development",
   //////

# Installation de node module
npm install

# Start-server
npm start

# une fois le server démarré se rendre à l'adress ci-desous
http://localhost:9000

```

## utilisation d'un serveur local

```bash
# construire le projet en production
# Dans le fichier webpack.config.js mettre le fichier en mode production
////////
   mode: "production",
   //////

# utiliser la commande
npm run webpack

# prendre les fichiers dans le fichier dist et les mettre dans un server HTML

```
