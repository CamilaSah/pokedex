import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const pokemonsType = [
  {
    label: 'Fire',
    value: 'fire',
  },
  {
    label: 'Water',
    value: 'water',
  },
  {
    label: 'Grass',
    value: 'grass',
  },
  {
    label: 'Electric',
    value: 'electric',
  },
  {
    label: 'Psychic',
    value: 'psychic',
  },
  {
    label: 'Ice',
    value: 'ice',
  },
  {
    label: 'Dragon',
    value: 'dragon',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Fairy',
    value: 'fairy',
  },
  {
    label: 'Normal',
    value: 'normal',
  },
  {
    label: 'Fighting',
    value: 'fighting',
  },
  {
    label: 'Flying',
    value: 'flying',
  },
  {
    label: 'Poison',
    value: 'poison',
  },
  {
    label: 'Ground',
    value: 'ground',
  },
  {
    label: 'Rock',
    value: 'rock',
  },
  {
    label: 'Bug',
    value: 'bug',
  },
  {
    label: 'Ghost',
    value: 'ghost',
  },
  {
    label: 'Steel',
    value: 'steel',
  },
];

const sortedPokemonsType = pokemonsType.sort((a,b) => a.label.localeCompare(b.label));

const PokemonFilter = ({ selectedTypes, setSelectedTypes }) => {

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={sortedPokemonsType}
      value={selectedTypes}
      disableCloseOnSelect
      onChange={(event, newValue) => setSelectedTypes(newValue)}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.label}
          </li>
        );
      }}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Filtrar por" placeholder="Filtrar por" />
      )}
    />
  );
}

export default PokemonFilter;

