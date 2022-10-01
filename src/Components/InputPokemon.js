import './InputPokemon.css';

const InputPokemon = (props) => {
    const { searchInput, setSearchInput, setPokemonName, setPokemonSprite, setPokemonDataObject } = props;

return (
    <section>
      <form className='
      Formulario'
  
        action="get"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit event received");
          fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
              setPokemonName(data.name);
              setPokemonSprite(data.sprites.front_default)
              setPokemonDataObject(data);
            })
        }}
      >
        <input
          className='busqueda'
          type="text"
          name="name"
          value={searchInput}
          placeholder="SEARCH..."
          onChange={(e) => { setSearchInput(e.target.value) }}
        />
      </form>
     
    </section>
  );
}

  export default InputPokemon