import { ListFilter, X, Component, Calendar, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getPokemons } from "../services/pokemonService";
import BookCard from "../components/PokemonCard";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemons();
                setPokemons(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="flex">
            <div className="h-full w-80 sticky top-6 p-6 my-8 ml-8 mr-4 bg-[#023047] rounded-xl flex flex-col gap-6 shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-[#ffb703]">
                        <ListFilter size={22} />
                        Filtrar Pokemons
                    </h2>

                    <button className="bg-[#ffb703] p-2 rounded-full hover:opacity-90">
                        <X size={20} className="text-white" />
                    </button>
                </div>

                <hr />

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold flex gap-2 items-center text-[#ffb703]">
                        <Component size={22} />
                        Por Tipo
                    </h3>
                    <div className="flex flex-col gap-2 pl-6">
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="fire" className="accent-[#ffb703]" />
                            Fogo
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="water" className="accent-[#ffb703]" />
                            Água
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="grass" className="accent-[#ffb703]" />
                            Grama
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="electric" className="accent-[#ffb703]" />
                            Elétrico
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="insect" className="accent-[#ffb703]" />
                            Inseto
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="tipo" value="ground" className="accent-[#ffb703]" />
                            Terra
                        </label>
                    </div>
                </div>

                <hr />

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold flex gap-2 items-center text-[#ffb703]">
                        <Calendar size={22} />
                        Por Geração
                    </h3>
                    <div className="flex flex-col gap-2 pl-6">
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-i" className="accent-[#ffb703]" />
                            Geração I
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-ii" className="accent-[#ffb703]" />
                            Geração II
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-iii" className="accent-[#ffb703]" />
                            Geração III
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-iv" className="accent-[#ffb703]" />
                            Geração IV
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-v" className="accent-[#ffb703]" />
                            Geração V
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input type="radio" name="gen" value="generation-vi" className="accent-[#ffb703]" />
                            Geração VI
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8 items-center flex flex-col">
                <div className="flex items-center mb-6 w-full max-w-3xl bg-white rounded-full border border-[#ffb703] overflow-hidden">
                    <input
                        className="flex-1 px-4 text-gray-700 focus:outline-none"
                        type="text"
                        placeholder="Busque seu Pokémon favorito..."
                    />
                    <button className="px-4 py-2 text-white bg-[#ffb703]">
                        <Search size={22} />
                    </button>
                </div>

                <div className="text-center">
                    <h1 className="font-bold text-4xl mb-12 text-white">
                        Conheça Nossa <span className="text-[#ffb703] italic text-5xl">Pokedex!</span>
                    </h1>

                    {loading ? (
                        <div className="col-span-3 flex justify-center items-center">
                            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#ffb703] rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-12">
                            {pokemons.map((pokemon) => (
                                <BookCard key={pokemon.id} pokemon={pokemon} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
