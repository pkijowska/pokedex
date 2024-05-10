export type PokemonType = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'stellar' | 'unknown';

export const getTypeColor = (typeName: PokemonType) => {
    switch (typeName) {
      case 'normal':
        return '#c8bdbd'; // Pastel Grey
      case 'fighting':
        return '#CA5E5A'; // Pastel Red
      case 'flying':
        return '#B09BEE'; // Pastel Purple
      case 'poison':
        return '#C57BC4'; // Pastel Purple
      case 'ground':
        return '#E2BF65'; // Pastel Brown
      case 'rock':
        return '#B6A136'; // Pastel Olive
      case 'bug':
        return '#BCC579'; // Pastel Lime
      case 'ghost':
        return '#735797'; // Pastel Purple
      case 'steel':
        return '#B7B7CE'; // Pastel Blue-Grey
      case 'fire':
        return '#F19957'; // Pastel Orange
      case 'water':
        return '#6390F0'; // Pastel Blue
      case 'grass':
        return '#B1D19E'; // Pastel Green
      case 'electric':
        return '#F7D02C'; // Pastel Yellow
      case 'psychic':
        return '#F58EAD'; // Pastel Pink
      case 'ice':
        return '#96D9D6'; // Pastel Cyan
      case 'dragon':
        return '#6F35FC'; // Pastel Dark Violet
      case 'dark':
        return '#705746'; // Pastel Dark Brown
      case 'fairy':
        return '#D685AD'; // Pastel Pink
      case 'stellar':
        return '#4387FD'; // Pastel Deep Blue
      case 'unknown':
        return '#c8bdbd'; // Pastel Mysterious Green
      default:
        return '#000000'; 
    }
  }
  
export const capitaliseFirstLetter = (string:string)=>  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }