import { useEffect, useState } from 'react';
import SortSelect from '../componentes/SortSelect';
import PokemonFilter from '../componentes/PokemonFilter';
import { Grid2 } from "@mui/material";
import PokemonListItem from '../componentes/PokemonListItem';

const url = 'https://pokeapi.co/api/v2/pokedex/2/';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.pokemon_entries);
        setPokemons(data.pokemon_entries);
        setSortedPokemons(data.pokemon_entries);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);

  const handleSortChange = (sortType) => {
    let sorted = [...pokemons];

    if (sortType === 'A-Z') {
      sorted.sort((a, b) => a.pokemon_species.name.localeCompare(b.pokemon_species.name));
    } else if (sortType === 'Menor número') {
      sorted.sort((a, b) => a.entry_number - b.entry_number);
    }

    setSortedPokemons(sorted);
  };

  const filteredPokemons = sortedPokemons.filter((pokemon) => {
    if (selectedTypes.length === 0) return true; // Se nenhum tipo for selecionado, mostra todos

    return pokemon.types?.some((type) => selectedTypes.includes(type));
  });

  setSelectedTypes(filteredPokemons);
  

  if (loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return (
    <div className='PokedexContainer'>
      <SortSelect onSortChange={handleSortChange} />
      <PokemonFilter selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}/>
      <Grid2
        container
        spacing={2}
      >
        {filteredPokemons.map((pokemon) => (
          <Grid2 key={pokemon.entry_number} display="flex" justifyContent="center" alignItems="center" size={3}>
            <PokemonListItem pokeName={pokemon.pokemon_species.name} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  )
}

export default Pokedex;