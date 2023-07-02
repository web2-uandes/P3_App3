import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

export default function DashBoardItem({ title, subtitle, icon, to }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box bgcolor={colors.primary[400]} m="0 30px" p="20px" width="50%">
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
        <Button
          sx={{ backgroundColor: colors.blueAccent[700] }}
          variant="contained"
          href={to}
        >
          <Typography sx={{ color: colors.grey[100] }}>Enter</Typography>
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
