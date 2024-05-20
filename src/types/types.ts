export type PokemonType = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'stellar' | 'unknown';

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

export type PokemonsResponse = {
    id: number,
    name: string,
    image: string,
    type: [PokemonType, PokemonType] | [PokemonType],
    height: number,
    weight: number,
}[]

export type PokemonDetailResponse = {
    id: number,
    name: string,
    image: string,
    type: [PokemonType, PokemonType] | [PokemonType],
    height: number,
    weight: number,
    description: string,
    stats: { name: string, base_stat: number }[],
    color: string,
}

