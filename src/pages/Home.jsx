import { ListFilter, X, Component, SearchX, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonsByType, getPokemonByName } from "../services/pokemonService";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
    const types = [
        { label: "Todos", value: "" },
        { label: "Fogo", value: "fire" },
        { label: "Água", value: "water" },
        { label: "Grama", value: "grass" },
        { label: "Elétrico", value: "electric" },
        { label: "Inseto", value: "bug" },
        { label: "Terra", value: "ground" },
        { label: "Voador", value: "flying" },
        { label: "Psíquico", value: "psychic" },
        { label: "Normal", value: "normal" },
        { label: "Fada", value: "fairy" },
        { label: "Veneno", value: "poison" },
        { label: "Pedra", value: "rock" },
        { label: "Fantasma", value: "ghost" },
        { label: "Aço", value: "steel" },
        { label: "Dragão", value: "dragon" },
        { label: "Lutador", value: "fighting" },
        { label: "Gelo", value: "ice" },
        { label: "Sombrio", value: "dark" }
    ]
    const [selectedType, setSelectedType] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchName, setSearchName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            setError("");
            setLoading(true);
            try {
                let data;
                if (searchName) {
                    const result = await getPokemonByName(searchName);
                    data = result ? [result] : [];
                    if (!result) setError("Pokémon não encontrado");
                } else if (selectedType) {
                    data = await getPokemonsByType(selectedType);
                } else {
                    data = await getPokemons();
                }
                setPokemons(data);
            } catch (err) {
                console.error(err);
                setError("Erro ao buscar Pokémon");
                setPokemons([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [selectedType, searchName]);

    return (
        <div className="flex">
            <div className="h-full w-80 sticky top-4 p-6 my-4 ml-8 mr-4 bg-[#023047] rounded-xl flex flex-col gap-6 shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-[#ffb703]">
                        <ListFilter size={22} />
                        Filtrar Pokemons
                    </h2>
                </div>

                <hr />

                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold flex gap-2 items-center text-[#ffb703]">
                        <Component size={22} />
                        Por Tipo
                    </h3>
                    <div className="flex flex-col gap-2 pl-6">
                        {types.map((type) => (
                            <label key={type.value} className="flex items-center gap-2 text-white">
                                <input
                                    type="radio"
                                    name="tipo"
                                    value={type.value}
                                    className="accent-[#ffb703]"
                                    checked={selectedType === type.value}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                />
                                {type.label}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8 items-center flex flex-col">
                <div className="flex items-center mb-6 w-full max-w-3xl bg-white rounded-full border border-[#ffb703] overflow-hidden">
                    <input
                        className="flex-1 px-4 text-gray-700 focus:outline-none"
                        type="text"
                        placeholder="Busque seu Pokémon favorito..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-[#ffb703]"
                        onClick={() => setSearchName(searchName)}
                    >
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
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center">
                            <SearchX size={50} color="#023047" />
                            <p className="text-[#023047] text-2xl font-semibold">{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-5 gap-12">
                            {pokemons.map((pokemon) => (
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
