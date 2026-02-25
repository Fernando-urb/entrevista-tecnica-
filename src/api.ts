import { Pokemon } from "./types";

const POKEMONS: Pokemon[] = [
  {
    id: "1",
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    price: 150,
    description: "A strange seed was planted on its back at birth."
  },
  {
    id: "4",
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    price: 200,
    description: "The flame on its tail indicates its life force."
  },
  {
    id: "7",
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    price: 180,
    description: "After birth, its back swells and hardens into a shell."
  },
  {
    id: "25",
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    price: 300,
    description: "Pikachu that can generate powerful electricity have cheek pouches that are extra soft and super stretchy."
  }
];

export const api = {
  list: async (): Promise<Pokemon[]> => {
    // Simulamos un retraso de red de 1.5 segundos
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(POKEMONS);
      }, 1500);
    });
  }
};
