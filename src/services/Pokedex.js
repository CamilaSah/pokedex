import { useEffect, useState } from 'react';
import PokemonListItem from '../componentes/PokemonListItem';

const url = 'https://pokeapi.co/api/v2/pokedex/2/';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.pokemon_entries);
        setPokemons(data.pokemon_entries);
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
    <div className='pokemons'>
      {pokemons.map((pokemon) => (
        <PokemonListItem pokeName={pokemon.pokemon_species.name} key={pokemon.entry_number}  />
      ))}
    </div>
  )
}

export default Pokedex;