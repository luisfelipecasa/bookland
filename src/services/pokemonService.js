import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemons = async () => {
  try {
    const response = await api.get(`/pokemon`, {
      params: { limit: 52 },
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
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return [];
  }
};

export const getPokemonById = async (id) => {
  try {
    const { data } = await api.get(`/pokemon/${id}`);
    const { data: species } = await api.get(`/pokemon-species/${id}`);

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      shiny: data.sprites.other["official-artwork"].front_shiny,
      types: data.types.map((t) => t.type.name),
      description:
        species.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        )?.flavor_text.replace(/\n|\f/g, " "),
    };
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
};

export const getPokemonsByType = async (type) => {
  try {
    const { data } = await api.get(`/type/${type}`, {
      params: { limit: 52 },
    });

    const pokemons = await Promise.all(
      data.pokemon.slice(0, 52).map(async (p) => {
        const response = await api.get(p.pokemon.url);
        const d = response.data;
        return {
          id: d.id,
          name: d.name,
          image: d.sprites.other["official-artwork"].front_default,
          types: d.types.map(t => t.type.name),
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar Pokémon por tipo:", error);
    return [];
  }
};

export const getPokemonByName = async (name) => {
  try {
    const { data } = await api.get(`/pokemon/${name.toLowerCase()}`);
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map(t => t.type.name),
    };
  } catch (error) {
    console.error("Pokémon não encontrado:", error);
    return null;
  }
};