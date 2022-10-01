import { useEffect, useState } from 'react';
import './App.css';
import InputPokemon from './Components/InputPokemon';
import logo from './descarga.png'
import AbilityPokemon from './Components/AbilityPokemon';
import TypePokemon from './Components/TypePokemon';
import Stats from './Components/Stats';
import InfoPokemon from './Components/InfoPokemon';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [pokemonSprite, setPokemonSprite] = useState()
  const [pokemonDataObject, setPokemonDataObject] = useState()
 
 
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        //data = { name, 
        //sprites :
        //{front_default}  }
        const {name, sprites: { front_default } } = data;
        setPokemonName(name);
        setPokemonSprite(front_default)
        setPokemonDataObject(data)
      })
      .catch((err) => console.warn(err))
    return () => {
  
    }
  }, [])
  return(
    <div className='Body'>
    <div className='barra-principal'>
      <img className='logo-pagina' src={logo} alt='' />
      <InputPokemon 
      searchInput={searchInput} 
      setSearchInput={setSearchInput}
      setPokemonName={setPokemonName}
      setPokemonSprite={setPokemonSprite}
      setPokemonDataObject={setPokemonDataObject}/>
       </div>
{    pokemonDataObject &&   <main className='container'>
        
   <div className='ConteinerImgName'>
            <h1>{pokemonName}</h1>
             <img className='PokemonImg' src={pokemonSprite ? pokemonSprite : ''} 
      alt='pokemon-sprite' />
      </div>

      <section className='results'>

      <InfoPokemon/>
      <div className='Types-Ability'>
       
        <TypePokemon types={pokemonDataObject.types}/>
      <AbilityPokemon abilities={pokemonDataObject.abilities}/>
      
      </div>
      </section>
      
      <section className='stats'>
      <Stats stats={pokemonDataObject.stats}/>
       </section>
      
      </main>}

    </div>
  )
}

export default App;
