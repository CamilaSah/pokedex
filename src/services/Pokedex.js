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
        const pokemonDetails = data.pokemon_entries.map((entry) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`)
            .then((res) => res.json())
            .then((details) => ({
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types,
            }))
            .catch((error) => {
              console.log(error);
              setLoading(false);
            })
        })
        setPokemons(pokemonDetails);
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
        <PokemonListItem id={pokemon.name} image={pokemon.sprites.front_default} number={pokemon.number} name={pokemon.name} types={pokemon.types} />
      ))}
    </div>
  )
}

export default Pokedex;