import React, { useState } from "react";
import {
  useTheme,
  Box,
  TextField,
  Autocomplete,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../theme";

export default function SearchBar({ options, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event, value) => {
    const inputValue = event?.target?.value || value;
    setSearchValue(inputValue === null ? "" : inputValue);
  };

  const handleSearch = () => {
    setSelected(searchValue);
  };

  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) => {
      if (option === null || inputValue === null) {
        return "";
      } else {
        if (inputValue.length < 2) return "";
        return option.toLowerCase().includes(inputValue.toLowerCase());
      }
    });
  };

  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      p={0.2}
      borderRadius={1}
    >
      <Autocomplete
        sx={{
          "&& .MuiInputBase-root": {
            padding: 0.1,
            paddingTop: 0.2,
            paddingLeft: 0.5,
          },
        }}
        value={searchValue}
        onChange={(event, value) => setSearchValue(value)}
        inputValue={searchValue}
        onInputChange={handleSearchInputChange}
        options={options}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            style={{ width: 200 }}
            {...params}
            placeholder="Search"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
        )}
      />
      <IconButton type="button" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
