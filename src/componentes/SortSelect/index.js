import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect({ onSortChange }) {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
    onSortChange(selectedSort); // Chama a função de ordenação passando o critério selecionado
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Ordenar por"
          onChange={handleChange}
        >
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="Menor número">Menor número</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
