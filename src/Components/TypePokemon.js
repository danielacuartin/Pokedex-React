import { PokeTypeColor } from "../utils";
import "./TypePokemon.css";

const TypePokemon = ({ types }) => {
  return (
    <div>
      {types &&
        types.map((el) => {
          return (
            <div
              className="poke-types"
              style={{ 
                border: `1px dashed ${PokeTypeColor(`${el.type.name}`)}`,
            
            }}
            >
              <span
                className="button"
                style={{ color: PokeTypeColor(`${el.type.name}`) }}
              >
                {`${el.type.name}`}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default TypePokemon;
