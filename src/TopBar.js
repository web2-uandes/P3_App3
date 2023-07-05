import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ColorModeContext } from "./theme";
import { useTheme, Box, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  fetchActiveEvaluations,
  fetchAllEvaluations,
  fetchGroups,
} from "./Fetchs";

import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import SearchBar from "./components/SearchBar";
import SideBar from "./SideBar";

const Topbar = ({
  groups,
  setSelectedGroup,
  setSelectedEvaluation,
  setSelectedActiveEvaluation,
}) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [options, setOptions] = useState([]);

  const location = useLocation();
  const groupRoute = matchPath(location.pathname, "/Groups");
  const evaluationsRoute = matchPath(location.pathname, "/Evaluations");
  const activeEvaluationsRoute = matchPath(location.pathname, "/Actives");

  useEffect(() => {
    if (groupRoute) {
      fetchGroups().then((groups) => {
        const groupNames = groups.map((group) => group.name);
        setOptions(groupNames);
      });
    }
    if (evaluationsRoute) {
      fetchAllEvaluations().then((evals) => {
        const evalNames = evals.map((item) => item.name);
        setOptions(evalNames);
      });
    }
    if (activeEvaluationsRoute) {
      fetchActiveEvaluations().then((actives) => {
        const actNames = actives.map((item) => item.name);
        setOptions(actNames);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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

        {groupRoute && (
          <SearchBar options={options} setSelected={setSelectedGroup} />
        )}
        {evaluationsRoute && (
          <SearchBar options={options} setSelected={setSelectedEvaluation} />
        )}
        {activeEvaluationsRoute && (
          <SearchBar
            options={options}
            setSelected={setSelectedActiveEvaluation}
          />
        )}
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
      </Box>
    </Box>
  );
};

export default Topbar;
