import { Bookmark, Origami, Flame, Droplet, Leaf, Zap, Feather, Cloud, Star, HandFist, Snowflake, Hexagon, Ghost, Bug, Mountain, Shell, Moon, Cuboid, Anvil } from "lucide-react";

const typeIcons = {
  fire: <Flame className="w-8 h-8 text-white bg-red-500 rounded-full p-1" />,
  water: <Droplet className="w-8 h-8 text-white bg-blue-500 rounded-full p-1" />,
  grass: <Leaf className="w-8 h-8 text-white bg-green-500 rounded-full p-1" />,
  electric: <Zap className="w-8 h-8 text-white bg-yellow-400 rounded-full p-1" />,
  psychic: <Shell className="w-8 h-8 text-white bg-pink-500 rounded-full p-1" />,
  fighting: <HandFist className="w-8 h-8 text-white bg-orange-500 rounded-full p-1" />,
  normal: <Hexagon className="w-8 h-8 text-white bg-gray-400 rounded-full p-1" />,
  fairy: <Star className="w-8 h-8 text-white bg-pink-300 rounded-full p-1" />,
  poison: <Cloud className="w-8 h-8 text-white bg-purple-500 rounded-full p-1" />,
  ground: <Mountain className="w-8 h-8 text-white bg-yellow-600 rounded-full p-1" />,
  rock: <Cuboid className="w-8 h-8 text-white bg-gray-600 rounded-full p-1" />,
  bug: <Bug className="w-8 h-8 text-white bg-green-700 rounded-full p-1" />,
  ghost: <Ghost className="w-8 h-8 text-white bg-purple-700 rounded-full p-1" />,
  ice: <Snowflake className="w-8 h-8 text-white bg-cyan-300 rounded-full p-1" />,
  dragon: <Origami className="w-8 h-8 text-white bg-indigo-600 rounded-full p-1" />,
  dark: <Moon className="w-8 h-8 text-white bg-gray-800 rounded-full p-1" />,
  steel: <Anvil className="w-8 h-8 text-white bg-gray-500 rounded-full p-1" />,
  flying: <Feather className="w-8 h-8 text-white bg-gray-300 rounded-full p-1" />,
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="relative shadow-xl bg-white rounded-xl hover:scale-105 transition cursor-pointer">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="h-full w-full rounded-xl"
      />

      <div className="absolute top-2 left-2 flex items-center gap-2">
        {pokemon.types.map((type) => (
          <span key={type} className="text-sm">
            {typeIcons[type]}
          </span>
        ))}
      </div>

      <div className="absolute right-2 top-2">
        <Bookmark className="w-8 h-8 text-white bg-[#023047] rounded-full p-1" />
      </div>

      <div className="text-white rounded-b-xl absolute bottom-0 p-4 pt-12 flex flex-col w-full bg-gradient-to-t from-black via-black/70 to-transparent">
        <h2 className="font-bold text-xl">
          {pokemon.name}
        </h2>
      </div>
    </div>
  );
};

export default PokemonCard;
