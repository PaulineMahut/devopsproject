# On utilise as BUILD car on va construire notre image en plusieurs étapes
FROM node:18-alpine as build

WORKDIR /app

COPY frontend/package*.json ./

RUN npm i

COPY frontend .

# On construit notre application
RUN npm run build
# On utilise une image nginx pour servir notre application
FROM nginx:alpine
# On copie le build de notre application dans le dossier /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
# On démarre nginx
CMD ["nginx", "-g", "daemon off;"]


