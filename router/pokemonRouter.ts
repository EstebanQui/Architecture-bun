import { Elysia } from 'elysia';
import * as pokemonController from '../controller/pokemonController';

export const initPokemonRoutes = (app: Elysia) => {
    app
        .get("/pokemons", pokemonController.getPokemons)
        .post("/pokemons", pokemonController.createPokemon)
        .put("/pokemons/:id", (req) => {
            const id = req.params.id;
            return pokemonController.updatePokemon(id, req.body);
        })
        .delete("/pokemons/:id", (req) => {
            const id = req.params.id;
            return pokemonController.deletePokemon(id);
        })
}
