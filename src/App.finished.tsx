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
      setIsLoading(false);
    });
  }, []);

  const handleAddToCart = (pokemon: Pokemon) => {
    if (cart.length < 3) {
      setCart((prev) => [...prev, pokemon]);
    } else {
      alert("No puedes agregar más de 3 elementos al carrito");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="nes-text is-primary">Poke Store</h1>
      
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <p className="nes-text is-primary">Cargando...</p>
        </div>
      ) : (
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
                  <span className="nes-text is-success">${pokemon.price}</span>
                </p>
                <p style={{ fontSize: '0.8rem' }}>{pokemon.description}</p>
              </div>
              <button
                className={`nes-btn ${cart.length >= 3 ? 'is-disabled' : 'is-primary'}`}
                onClick={() => handleAddToCart(pokemon)}
                style={{ marginTop: '10px' }}
              >
                Agregar
              </button>
            </article>
          ))}
        </section>
      )}

      {/* Botón flotante del Nivel 3 */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <button className="nes-btn is-success">
          🛒 Carrito: {cart.length} / 3
        </button>
      </div>
    </div>
  );
}

export default App;
