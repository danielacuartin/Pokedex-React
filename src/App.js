import { useEffect, useState } from "react";
import "./App.css";
import InputPokemon from "./Components/InputPokemon";
import AbilityPokemon from "./Components/AbilityPokemon";
import TypePokemon from "./Components/TypePokemon";
import Stats from "./Components/Stats";
import { PokeTypeColor } from "./utils";
import arriba from "./arriba.png";
import fuente from "./RetroGaming.ttf";
import background from "./fondo.jpg";
import abajo from "./abajo.png";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonDataObject, setPokemonDataObject] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        //data = { name,
        //sprites :
        //{front_default}  }
        const {
          name,
          sprites: { front_default },
        } = data;
        setPokemonName(name);
        setPokemonSprite(front_default);

        setPokemonDataObject(data);
      })
      .catch((err) => console.warn(err));
    return () => {};
  }, []);
  return (
    <div
      className="Body"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        padding: "400px 0 400px 0",
        height: "1300px",
      }}
    >
      {pokemonDataObject && (
        <main className="poke-card">
          <img className="arriba" src={arriba} alt="" />
          <div className="contenedor-estilo">
            <div className="linea-negra">
              <InputPokemon 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setPokemonName={setPokemonName}
                setPokemonSprite={setPokemonSprite}
                setPokemonDataObject={setPokemonDataObject}
              />
              <div className="img-container">
                <h1 style={{ FontFamily: { fuente } }}>{pokemonName}</h1>
                <img
                  className="poke-img"
                  style={{
                    backgroundImage: `radial-gradient(${PokeTypeColor(
                      pokemonDataObject.types[1]?.type?.name || "#2A1A1F"
                    )} 33%, ${PokeTypeColor(
                      pokemonDataObject.types[0].type.name
                    )} 33%)`,
                    backgroundSize: "9px 9px",
                  }}
                  src={pokemonSprite ? pokemonSprite : ""}
                  alt="pokemon-sprite"
                />
              </div>
              <TypePokemon types={pokemonDataObject.types} />
              <AbilityPokemon abilities={pokemonDataObject.abilities} />
              <Stats stats={pokemonDataObject.stats} />
            </div>
          </div>
          <img className="abajo" src={abajo} alt="" />
        </main>
      )}
    </div>
  );
}

export default App;
