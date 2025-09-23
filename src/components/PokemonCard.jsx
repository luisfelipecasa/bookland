import TypeIcon from "./TypeIcon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="relative shadow-xl bg-white rounded-xl hover:scale-105 transition cursor-pointer">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="h-full w-full rounded-xl"
        />

        <div className="absolute top-2 left-2 flex items-center gap-2">
          {pokemon.types.map((type) => (
            <TypeIcon key={type} type={type} />
          ))}
        </div>

        <div className="text-white rounded-b-xl absolute bottom-0 p-4 pt-12 flex flex-col w-full bg-gradient-to-t from-black via-black/70 to-transparent">
          <h2 className="font-bold text-xl">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
