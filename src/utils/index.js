export function PokeTypeColor(type) {
    switch (type) {
        case "normal":
            return "#A8A77A"
    
            case "fire":
            return "#EE8130"
    
            case "water":
            return "#6390F0"
    
            case "electric":
            return "#F7D02C"
    
            case "grass":
            return "#7AC74C"
            
            case "ice":
            return "#96D9D6"
    
            case "fighting":
            return "#C22E28"
    
            case "poison":
            return "#A33EA1"
            
            case "ground":
            return "#E2BF65"
    
            case "flying":
            return "#A98FF3"
    
            case "psychic":
            return "#F95587"
    
            case "bug":
            return "#A6B91A"
    
            case "rock":
            return "#B6A136"
    
            case "ghost":
            return "#735797"
            
            case "dragon":
            return "#6F35FC"
            
            case "dark":
            return "#705746"
    
            case "steel":
            return "#B7B7CE"
            
            case "fairy":
            return "#D685AD"
    
            default: 
            return type
    }
}

const getStatColorRank = (stat) => {
    if (stat >= 150) {
      return "#00c2b8"
    } else if (stat >= 90) {
      return "#23cd5e"
    } else if (stat >= 60) {
      return "#ffdd57"
    } else if (stat >= 40) {
      return "#ff7f0f"
    }
    return "#f34444"
  }
  
  const getBarWidth = (stat) => {
    const width = (stat / 255) * 150
    return width + "%"
  }
  
  function formatStatName(stat) {
    switch (stat) {
      case "hp":
        return "HP"
  
      case "attack":
        return "Attack"
  
      case "defense":
        return "Defense"
  
      case "special-attack":
        return "Sp. Atk"
  
      case "special-defense":
        return "Sp. Def"
  
      case "speed":
        return "Speed"
  
      default:
        return stat
    }
  }
  
  export {
    getStatColorRank,
    getBarWidth,
    formatStatName
  }