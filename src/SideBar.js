import React from 'react';
// import '-react-pro-sidebar/dist/scss/styles.scss';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material'


export default function SideBar() {
  return (
    <Box>
        <Sidebar>
        <Menu>
            <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
        </Menu>
        </Sidebar>
    </Box>
  )
}
