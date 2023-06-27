import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";
import {
  useTheme,
  Box,
  IconButton,
  InputBase,
  Autocomplete,
  TextField,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";

import SideBar from "./SideBar";
// import { useProSidebar } from "react-pro-sidebar";

const Topbar = ({ groups, setGroups }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log("groups:", groups);
    const groupNames = groups.map((group) => group.name);
    console.log("groupNames:", groupNames);
    setOptions(groupNames);
  }, [groups]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSearchInputChange = (event, value) => {
    const inputValue = event?.target?.value || value;
    setSearchValue(inputValue === null ? "" : inputValue);
  };

  const handleSearch = () => {
    console.log(searchValue);
  };

  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {true && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <Autocomplete
            value={searchValue}
            onChange={(event, value) => setSearchValue(value)}
            inputValue={searchValue}
            onInputChange={handleSearchInputChange}
            options={options}
            filterOptions={filterOptions}
            renderInput={(params) => (
              <TextField
              style={{ width: 200}}
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
      </Box>

      <SideBar state={state} toggleDrawer={toggleDrawer} />

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        {/* {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )} */}
      </Box>
    </Box>
  );
};

export default Topbar;
