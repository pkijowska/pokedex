import { PokemonType } from "../utils/utils"

export type PokemonContextType = {
    toggleCaughtPokemons: (pokemon: any) => void,
    caughtPokemons: any[],
}

export type Pokemon = {
    id: number,
    name: string,
    image: string,  
    type?: [PokemonType, PokemonType] | [PokemonType],
}
