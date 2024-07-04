# Utiliser l'image Node.js officielle comme image de base
FROM node:18-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json du bon répertoire
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port sur lequel l'application tourne
EXPOSE 3005

# Commande pour lancer le serveur de développement React
CMD ["npm", "start"]
