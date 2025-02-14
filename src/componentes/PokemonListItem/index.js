import { useEffect, useState } from 'react';
import './PokemonListItem.css'

const PokemonListItem = (props) => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const pokemonDetails = props.pokemon_entries.map((entry) => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`)
                .then((response) => response.json())
                .then((data) => ({
                    image: data.sprites.front_default,
                    number: data.id,
                    name: data.name,
                    types: data.types,
                }))
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        })
        setPokemon(pokemonDetails);
        setLoading(false);
    }, []);

if (loading) {
    return (
        <div>Carregando...</div>
    )
}

return (
    <div key={props.id} className='pokemon'>
        <div>
            <img className='pokemon_image' src={props.sprites.front_default} alt='Imagem do pokémon' />
        </div>
        <div className='pokemon_number'>{props.number}</div>
        <div>
            <h4 className='pokemon_name'>{props.name}</h4>
            <div className='pokemon_types'>{props.types}</div>
        </div>
    </div>
)
}

export default PokemonListItem