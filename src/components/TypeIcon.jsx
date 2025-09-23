import {
  Origami,
  Flame,
  Droplet,
  Leaf,
  Zap,
  Feather,
  Cloud,
  Star,
  HandFist,
  Snowflake,
  Hexagon,
  Ghost,
  Bug,
  Mountain,
  Shell,
  Moon,
  Cuboid,
  Anvil,
} from "lucide-react";

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

const TypeIcon = ({ type }) => {
  return typeIcons[type] || null;
};

export default TypeIcon;
