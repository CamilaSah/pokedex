import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokedex/2/';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemonPromises = data.pokemon_entries
      console.log(data);
      setPokemons(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, []);

  if (loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return (
    <>
      {
        pokemons.map((pokemon) => (
          <div key={pokemon.entry_number} className='personagem'>
            <img className='personagem_imagem' src={pokemon.url} alt='Imagem do personagem'/>
            <p className='personagem_nome'>{pokemon.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default Pokedex;