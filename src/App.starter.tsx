import React, { useState, useEffect } from 'react';
import { api } from './api';
import { Pokemon } from './types';

// Importamos los estilos de NES.css para que se vea igual que en la captura
import 'nes.css/css/nes.min.css';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [cart, setCart] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.list().then((data) => {
      setPokemons(data);
      // NIVEL 2: Deberías manejar el estado de carga aquí
    });
  }, []);

  const handleAddToCart = (pokemon: Pokemon) => {
    // EXTRA: Deberías validar que no se agreguen más de 3 elementos
    setCart((prev) => [...prev, pokemon]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="nes-text is-primary">Poke Store</h1>
      
      {/* NIVEL 2: Mostrar un texto de "Cargando..." si isLoading es true */}
      <section style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {pokemons.map((pokemon) => (
          <article key={pokemon.id} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }} className="nes-container with-title">
            <p className="title">{pokemon.name}</p>
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <div style={{ flex: 1 }}>
              <p>
                {/* NIVEL 1: El precio debería mostrarse aquí al lado del nombre o en la tarjeta */}
                <span className="nes-text is-success">--</span>
              </p>
              <p style={{ fontSize: '0.8rem' }}>{pokemon.description}</p>
            </div>
            <button
              className="nes-btn is-primary"
              onClick={() => handleAddToCart(pokemon)}
              style={{ marginTop: '10px' }}
            >
              Agregar
            </button>
          </article>
        ))}
      </section>

      {/* Botón flotante del NIVEL 3 */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <button className="nes-btn is-success">
          {/* NIVEL 3: Deberíamos mostrar la cantidad de elementos en el carrito */}
          🛒 Carrito: ? / 3
        </button>
      </div>
    </div>
  );
}

export default App;
