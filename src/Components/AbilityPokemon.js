import './AbilityPokemon.css';
const AbilityPokemon = ({ abilities }) =>  {

 return (
        <div className="Container-stats">
       <span>

                    {abilities.map((el) => {
                        return (
                            <p>{`${el.ability.name}`} </p>
                        )
                    })}
                </span>

        </div>
 )
}

export default AbilityPokemon;