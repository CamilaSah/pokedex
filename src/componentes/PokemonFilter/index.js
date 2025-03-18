import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const pokemonsType = ['Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark','Fairy','Normal','Fighting','Flying','Poison','Ground','Rock','Bug','Ghost','Steel'];
const sortedPokemonsType = pokemonsType.slice().sort();

const PokemonFilter = ({ selectedTypes, setSelectedTypes }) => {

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={sortedPokemonsType}
      value={selectedTypes}
      disableCloseOnSelect
      onChange={(event, newValue) => setSelectedTypes(newValue)}
      getOptionLabel={(option) => option}
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
            {option}
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

