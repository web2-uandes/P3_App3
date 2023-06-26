import React, { useState } from "react";
import {
  Box,
  useTheme,
  SwipeableDrawer,
  List,
  Divider,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";



import { tokens } from "./theme";
import { Link } from "react-router-dom";

const Item = ({ text, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ListItem 
      sx={{
        // selected and (selected + hover) states
        "&& .Mui-selected, && .Mui-selected:hover": {
          bgcolor: "transparent",
          "&, & .MuiListItemIcon-root": {
            color: `${colors.greenAccent[500]}`,
          },
        },
        // hover states
        "& .MuiListItemButton-root:hover": {
          bgcolor: "transparent",
          "&, & .MuiListItemIcon-root": {
            color: `${colors.blueAccent[500]}`,
          },
        },
      }}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(text)}
      component={Link}
      to={`/${to}`}
    >
      <ListItemButton selected={selected === text ? true : false}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography>{text}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default function SwipeableTemporaryDrawer({ state, toggleDrawer }) {
  const [selected, setSelected] = useState("DashBoard");
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <Item
          key={"Dashboard"}
          selected={selected}
          setSelected={setSelected}
          icon={<BarChartOutlinedIcon />}
          text={"Dashboard"}
          to={""}
        />
        <Item
          key={"Evaluations"}
          selected={selected}
          setSelected={setSelected}
          icon={<ReceiptOutlinedIcon />}
          text={"Evaluaciones"}
          to={"Evaluations"}
        />
        <Item
          key={"Groups"}
          selected={selected}
          setSelected={setSelected}
          icon={<PeopleOutlinedIcon />}
          text={"Grupos"}
          to={"Groups"}
        />
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
