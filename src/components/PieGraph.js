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
    // Evaluacion
    completed: "Completadas",
    not_completed: "Empezadas",
    started: "Iniciadas",
    not_started: "No Iniciadas",

    // Grupo
    correct_answers: "Correctas",
    wrong_answers: "Incorrectas",
    not_answered: "No respondidas",
    in_progress: "En Progreso",
  };

  const chartData = Object.entries(data).map(([label, value]) => ({
    id: labelMappings[label] || label, // Use custom label if available, otherwise use the original label
    value,
  }));

  const colorScheme = {
    // Evaluaciones
    Completadas: colors.blueAccent[700],
    Empezadas: colors.redAccent[400],
    Iniciadas: colors.blueAccent[700],
    "No Iniciadas": colors.redAccent[400],

    // Grupo
    Correctas: colors.greenAccent[400],
    Incorrectas: colors.redAccent[400],
    "No respondidas": colors.grey[400],
    "En Progreso": colors.blueAccent[700],
  };

  const EmptyTooltip = () => null;

  return (
    <>
      <div
        style={{
          height: "20vw",
          width: "20vw",
          minHeight: "300px",
          minWidth: "300px",
        }}
      >
        <ResponsivePie
          data={chartData}
          //   margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          enableSlicesLabels={false}
          arcLabel={(slice) =>
            slice.value === 0 ? "" : `${slice.id}: ${slice.value}`
          }
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
