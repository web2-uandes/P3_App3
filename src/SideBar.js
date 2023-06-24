import React, {useState, createContext} from 'react';
import { tokens } from './theme';
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { useTheme, Box, IconButton, Typography } from '@mui/material'
import { Link } from "react-router-dom";
// import { useSidebarContext } from "./sidebarContext";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
        routerLink={<Link to={to} />}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };


export default function SideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    // const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
    // const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  
  return (
    <Sidebar
    rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
        },
      }}
    >
    <Menu iconshape="square">
        {/* <MenuItem
        icon={
            collapsed ? (
            <MenuOutlinedIcon onClick={() => collapseSidebar()} />
            ) : sidebarRTL ? (
            <SwitchLeftOutlinedIcon
                onClick={() => setSidebarRTL(!sidebarRTL)}
            />
            ) : (
            <SwitchRightOutlinedIcon
                onClick={() => setSidebarRTL(!sidebarRTL)}
            />
            )
        }
        style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
        }}
        >
        {!collapsed && (
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
            >
            <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
            </Typography>
            <IconButton
                onClick={
                broken ? () => toggleSidebar() : () => collapseSidebar()
                }
            >
                <CloseOutlinedIcon />
            </IconButton>
            </Box>
        )}
        </MenuItem> */}
        {true && (
        <Box mb="25px">
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                "& .avater-image": {
                backgroundColor: colors.primary[500],
                },
            }}
            >
            {/* <img
                className="avater-image"
                alt="profile user"
                width="100px"
                height="100px"
                src={"../../assets/user.png"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
            /> */}
            </Box>
            <Box textAlign="center">
            <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
            >
                Harun Jeylan
            </Typography>
            </Box>
        </Box>
        )}
        <Box paddingLeft={true ? undefined : "10%"}>
        <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />

        <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 20px 5px 20px" }}
        >
            Data
        </Typography>
        <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />

        <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 20px 5px 20px" }}
        >
            Pages
        </Typography>
        <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />

        <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 20px 5px 20px" }}
        >
            Charts
        </Typography>
        <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
        />
        </Box>
    </Menu>
    </Sidebar>
  )
}
