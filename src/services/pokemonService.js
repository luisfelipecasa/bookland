import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemons = async () => {
  try {
    const response = await api.get(`/pokemon`, {
      params: { limit: 151 },
    });

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const response = await api.get(pokemon.url);
        const data = response.data;
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          types: data.types.map(t => t.type.name),
          generation: data.generation
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return [];
  }
};
