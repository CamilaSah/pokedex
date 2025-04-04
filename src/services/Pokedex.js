import { useEffect, useState } from 'react';
import SortSelect from '../componentes/SortSelect';
import PokemonFilter from '../componentes/PokemonFilter';
import { Grid2 } from "@mui/material";
import PokemonListItem from '../componentes/PokemonListItem';
import Box from '@mui/material/Box';

const url = 'https://pokeapi.co/api/v2/pokedex/2/';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const fetchPokemonData = async () => {
      try {
        // 1. Buscar a lista de Pokémon
        const response = await fetch(url);
        const data = await response.json();
        const pokemonEntries = data.pokemon_entries;
        console.log(data.pokemon_entries);

        // 2. Buscar os detalhes de cada Pokémon
        const pokemonDetails = await Promise.all(
          pokemonEntries.map(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_species.name}`);
            const dataDetails = await res.json();
            return {
              image: dataDetails.sprites.front_default,
              number: dataDetails.id,
              name: dataDetails.name,
              types: dataDetails.types.map((t) => t.type.name),
            };
          })
        )
        console.log("Todos os detalhes dos Pokémon:", pokemonDetails);
        setPokemons(pokemonDetails);
        setSortedPokemons(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar os Pokémons:", error);
        setLoading(false);
      }
    }
    // Chamando a função
    fetchPokemonData();
  }, []);

  const handleSortChange = (sortType) => {
    let sorted = [...pokemons];

    if (sortType === 'A-Z') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'Menor número') {
      sorted.sort((a, b) => a.number - b.number);
    }

    setSortedPokemons(sorted);
  };

  const filteredPokemons = sortedPokemons.filter((pokemon) => {
    if (selectedTypes.length === 0) {
      console.log(pokemon.types);
      console.log(selectedTypes);
      return true; // Se nenhum tipo for selecionado, mostra todos
    }
    // return !!selectedTypes.find((type) => pokemon.types.includes(type.value));

    for (let indexSelected = 0; indexSelected < selectedTypes.length; indexSelected++) {
      const selectedTypeValue = selectedTypes[indexSelected].value;
      for (let pokeTypeIndex = 0; pokeTypeIndex < pokemon.types.length; pokeTypeIndex++) {
        const pokeType = pokemon.types[pokeTypeIndex];
        if (pokeType === selectedTypeValue) {
          return true;
        }
      }
    }
    return false;
  });

  if (loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return (
    <div className='PokedexContainer'>
      <Box sx={{display:"flex", justifyContent:"flex-end", alignItems:"center", gap: "8px", py: "48px"}}>
        <SortSelect onSortChange={handleSortChange} />
        <PokemonFilter selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
      </Box>
      <Grid2
        container
        spacing={2}
      >
        {filteredPokemons.map((pokemon) => (
          <Grid2 key={pokemon.number} display="flex" justifyContent="center" alignItems="center" size={3}>
            <PokemonListItem pokeName={pokemon.name} pokeImage={pokemon.image} pokeNumber={pokemon.number} pokeTypes={pokemon.types} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  )
}

export default Pokedex;