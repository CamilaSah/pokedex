import { useEffect, useState } from 'react';
import './PokemonListItem.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function PokemonListItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
/*
const PokemonListItem = (props) => {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
 
        setLoading(true);
        console.log('Oi')
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const pokeObj = {
                    image: data.sprites.front_default,
                    number: data.id,
                    name: data.name,
                    types: "",
                };

                for (let index = 0; index < data.types.length; index++) {
                    const name = data.types[index].type.name;
                    pokeObj.types += `${name}`;
                    if (index < data.types.length - 1)
                    {
                        pokeObj.types += ', ';
                    }
                }
                setPokemon(pokeObj)
                setLoading(false);
            })
            .catch ((error) => {
                console.log("Erro ao buscar o Pokémon:", error);
                setLoading(false);
            })
    }, [props.pokeName]);

if (loading) {
    return (
        <div>Carregando...</div>
    )
}

return (
    <div key={props.pokeName} className='pokemon'>
        <div>
            <div>
                <img className='pokemon_image' src={pokemon.image} alt='Imagem do pokémon' />
            </div>
            <div className='pokemon_number'>{pokemon.number}</div>
            <div>
                <h4 className='pokemon_name'>{pokemon.name}</h4>
                <div className='pokemon_types'>{pokemon.types}</div>
            </div>
        </div>
    </div>
)
}

export default PokemonListItem
*/