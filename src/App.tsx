import { useEffect, useState } from 'react';
import { api } from './api';
import { Pokemon } from './types';

import 'nes.css/css/nes.min.css';


function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [, setCart] = useState<Pokemon[]>([]);
  const [isLoading] = useState(true);

  useEffect(() => {
    api.list().then((data) => {
      setPokemons(data);
      // NIVEL 2: manejar el estado de carga aquí
    });
  }, []);

  const handleAddToCart = (pokemon: Pokemon) => {
    // EXTRA: validar que no se agreguen más de 3 elementos
    setCart((prev) => [...prev, pokemon]);
  };

  return (
    <main className="poke-store">
      <h1 className="nes-text is-primary">Poke Store</h1>

      {/* NIVEL 2: mostrar "Cargando..." mientras isLoading sea true */}
      {isLoading ? (
        <p className="nes-text">Cargando...</p>
      ) : (
        <section className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <article
              key={pokemon.id}
              className="nes-container with-title"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <div className="pokemon-details">
                <p className="title pokemon-name">{pokemon.name}</p>
                <p className="pokemon-price">
                  {/* NIVEL 1: mostrar el precio de cada Pokémon */}
                  <span className="nes-text is-success">$--</span>
                </p>
                <p className="pokemon-description">{pokemon.description}</p>
              </div>
              <button
                className="nes-btn is-primary pokemon-button"
                onClick={() => handleAddToCart(pokemon)}
              >
                Agregar
              </button>
            </article>
          ))}
        </section>
      )}

      {/* NIVEL 3: mostrar la cantidad real de elementos en el carrito */}
      <div className="cart-button">
        <button className="nes-btn is-success">
          🛒 Carrito: ? / 3
        </button>
      </div>
    </main>
  );
}

export default App;
