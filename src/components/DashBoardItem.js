import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function DashBoardItem({ title, subtitle, icon }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box bgcolor={colors.primary[400]} m="0 30px" p="20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[400] }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
