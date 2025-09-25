import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemonService";
import { useEffect, useState } from "react";
import TypeIcon from "../components/TypeIcon";
import { Sparkle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonById(id);
                setPokemon(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center w-full">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-[#ffb703] rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="w-full flex flex-col justify-between items-center p-6">
                    <div className="max-w-3xl flex flex-col items-center justify-between">
                        <h1 className="text-5xl font-bold text-white mb-12 text-center">
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </h1>
                        <div className="flex gap-4 h-full justify-center mb-6">
                            {pokemon.types.map((type) => (
                                <div
                                    key={type}
                                    className="flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2"
                                >
                                    <TypeIcon type={type} className="w-12 h-12" />
                                    <span className="capitalize font-semibold text-gray-800 text-xl">{type}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row gap-12 mb-6">
                            <div className="relative">
                                <img
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    className="w-96 h-96 rounded-xl bg-white shadow-lg"
                                />
                                <img
                                    src={pokemon.sprite}
                                    alt={pokemon.name}
                                    className="w-24 h-24 rounded-full bg-white border border-gray-200 absolute bottom-2 right-2"
                                />
                            </div>
                            <div className="relative">
                                <Sparkle
                                    size={22}
                                    className="text-[#ffb703] absolute top-2 right-2"
                                />
                                <img
                                    src={pokemon.shiny}
                                    alt={pokemon.name}
                                    className="w-96 h-96 rounded-xl bg-white shadow-lg"
                                />
                                <img
                                    src={pokemon.sprite_shiny}
                                    alt={pokemon.name}
                                    className="w-24 h-24 rounded-full bg-white border border-gray-200 absolute bottom-2 right-2"
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mb-6 w-3xl">
                            <h2 className="text-xl font-bold mb-2">Descrição</h2>
                            <p className="text-gray-700">
                                {pokemon.description}
                            </p>
                        </div>

                        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mb-6 w-3xl">
                            <h2 className="text-xl font-bold mb-2">Informações adicionais</h2>
                            <p className="text-gray-700">
                                <span className="font-semibold">Felicidade base: </span>{pokemon.happiness}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Taxa de captura: </span>{pokemon.capture_rate}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Evolui de: </span>{pokemon.evolves_from}
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center gap-6 bg-white rounded-xl shadow-lg p-6">
                        {pokemon.id > 1 && (
                            <Link
                                to={`/pokemon/${pokemon.id - 1}`}
                                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                            >
                                <ChevronLeft className="w-6 h-6" />
                                <span className="font-semibold">Anterior</span>
                            </Link>
                        )}

                        <span className="text-xl font-bold text-gray-800">#{pokemon.id}</span>

                        <Link
                            to={`/pokemon/${pokemon.id + 1}`}
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                        >
                            <span className="font-semibold">Próximo</span>
                            <ChevronRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default PokemonPage;