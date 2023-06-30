import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

export default function PieGraph({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (!data) {
    return <div>No data available</div>;
  }

  const labelMappings = {
    completed: "Completadas",
    not_completed: "Empezadas",
  };

  const chartData = Object.entries(data).map(([label, value]) => ({
    id: labelMappings[label] || label, // Use custom label if available, otherwise use the original label
    value,
  }));

  const colorScheme = {
    Completadas: colors.blueAccent[700],
    Empezadas: colors.redAccent[400],
  };

  return (
    <>
      <div style={{ height: "300px" }}>
        <ResponsivePie
          data={chartData}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          enableSlicesLabels={false}
          radialLabel={(d) => `${d.id}: ${d.value}`}
          theme={{
            fontSize: "14px",
            textColor: colors.primary[200],
          }}
          colors={({ id }) => colorScheme[id]}
        />
      </div>
    </>
  );
}
