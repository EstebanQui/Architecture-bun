import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { html } from '@elysiajs/html';
import { initPokemonRoutes } from '../router/pokemonRouter';

const app = new Elysia();

app.use(html());
app.get("/", () => Bun.file("./public/index.html").text());

app.use(cors({
    origin: "*", //sert a limiter les domaines qui peuvent accéder à l'API (ici on autorise tout le monde"memo")
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Intégrez les routes Pokémon après avoir configuré CORS
initPokemonRoutes(app);

app.use(swagger({
    documentation: {
        info: {
            title: "Pokémon API",
            version: "1.0.0",
            description: "API pour gérer les Pokémons"
        },
    }
}));

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
