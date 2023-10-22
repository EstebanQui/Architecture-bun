# Elysia with Bun runtime

# Architecture

## Backend

Le backend est conçu en TypeScript et utilise la puissance du framework Elysia. Le point d'entrée unique, src/index.ts, initialise le serveur Elysia, définit les routes et les gestionnaires pour divers endpoints. Il fonctionne sur le port 3000.
<hr>

## Frontend

Bien que ce projet mette principalement l'accent sur le backend, il comporte un composant frontend : un fichier HTML public/index.html qui sert de page d'accueil ou de point d'entrée à l'application.
<hr>

## Base de données

L'application utilise Prisma comme ORM pour interagir avec une base de données MongoDB. Grâce à Prisma, diverses opérations de base de données sont simplifiées, garantissant une gestion efficace des données. MongoDB, une base de données NoSQL axée sur la performance et la flexibilité, est utilisée pour stocker les données du projet.

# Dépendances principales
@elysiajs/cors: Pour gérer les requêtes Cross-Origin Resource Sharing (CORS). 
@elysiajs/html: Pour servir des contenus HTML avec Elysia. @elysiajs/swagger: Pour générer et afficher une documentation interactive de l'API grâce à Swagger. @prisma/client: Un client ORM pour interagir avec la base de données. elysia: Le framework web utilisé pour construire l'API.

# Installation
```bash
bun create elysia ./elysia-example
```

```bash
bun install
```

```bash
npm install @prisma/client prisma --save-dev
```

```bash
npx prisma init
```

```bash
npx prisma generate
```

```bash
npm install @elysiajs/cors @elysiajs/html @elysiajs/swagger
```

Si vous rencontrez des problèmes, utilisez la commande ci-dessous pour installer les dépendances manquantes :

```bash
npm install
```

# Exécution

```bash
bun run dev
```

# Pages

Page d'accueil : http://localhost:3000/ C'est la page d'atterrissage de l'application.

Endpoint Pokemons : http://localhost:3000/pokemons Affiche la liste des Pokémons au format JSON.

Documentation de l'API : http://localhost:3000/swagger Présente la documentation interactive de l'API.