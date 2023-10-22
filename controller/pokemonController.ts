import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const getPokemons = async () => {
    return await db.pokemons.findMany();
}

export const createPokemon = async (data: any) => {
    return await db.pokemons.create({
        data
    });
}

export const updatePokemon = async (id: string, data: any) => {
    return await db.pokemons.update({
        where: {
            id: id,
        },
        data
    });
}

export const deletePokemon = async (id: string) => {
    return await db.pokemons.delete({
        where: {
            id: id
        }
    });
}