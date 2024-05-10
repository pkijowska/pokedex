import { PokemonType } from "../utils/utils"

export type PokemonContextType = {
    toggleCaughtPokemons: (pokemon: Pokemon) => void,
    caughtPokemons: Pokemon[],
}

export type Pokemon = {
    id: number,
    name: string,
    image: string,  
    type?: [PokemonType, PokemonType] | [PokemonType],
}
