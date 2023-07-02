import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";

export default function ResultsBarChart({ title, data, xLabel, yLabel }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartData = data.map((obj, index) => ({
    id: `layer-${index}`,
    ...obj,
  }));

  const customTheme = {
    axis: {
      legend: {
        text: {
          fill: colors.primary[200],
        },
      },
      ticks: {
        text: {
          fill: colors.primary[200],
        },
      },
    },
  };

  const yAxisFormat = (value) => {
    // Display integers on the y-axis
    return Number.isInteger(value) ? value : "";
  };

  const EmptyTooltip = () => null;

  return (
    <div style={{ height: "400px" }}>
      <Header title={title} />
      {chartData.length > 0 ? (
        <ResponsiveBar
          data={chartData}
          keys={["correct", "wrong", "in_progress", "not_started"]}
          indexBy="id"
          margin={{ top: 10, right: 50, bottom: 100, left: 75 }}
          padding={0.3}
          colors={[
            colors.greenAccent[400], // Specify the color for the "correct" layer
            colors.redAccent[400], // Specify the color for the "wrong" layer
            colors.grey[100], // Specify the color for the "in_progress" layer
            colors.blueAccent[400], // Specify the color for the "not_started" layer
          ]}
          enableLabel={false}
          theme={customTheme}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: xLabel,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: yLabel,
            legendPosition: "middle",
            legendOffset: -40,
            format: yAxisFormat,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          tooltip={EmptyTooltip}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
