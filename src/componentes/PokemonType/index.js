import './PokemonType.css'

const PokemonType = (props) => {

    // Função para capitalizar a primeira letra
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <span key={props.key} className={`type-${props.pokeType} badge`}>
            {capitalizeFirstLetter(props.pokeType)}
        </span>
    )
}

export default PokemonType