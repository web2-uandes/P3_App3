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
    started: "Iniciadas",
    not_started: "No Iniciadas",
  };

  const chartData = Object.entries(data).map(([label, value]) => ({
    id: labelMappings[label] || label, // Use custom label if available, otherwise use the original label
    value,
  }));

  const colorScheme = {
    Completadas: colors.blueAccent[700],
    Empezadas: colors.redAccent[400],
    Iniciadas: colors.blueAccent[700],
    "No Iniciadas": colors.redAccent[400],
  };

  const EmptyTooltip = () => null;

  return (
    <>
      <div style={{ height: "300px", width: "300px" }}>
        <ResponsivePie
          data={chartData}
          //   margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          enableSlicesLabels={false}
          arcLabel={(d) => `${d.id}: ${d.value}`}
          theme={{
            fontSize: "14px",
            textColor: colors.primary[400],
          }}
          colors={({ id }) => colorScheme[id]}
          tooltip={EmptyTooltip}
        />
      </div>
    </>
  );
}
