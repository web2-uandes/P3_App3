import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";

export default function BarGraph({ title, data, xLabel, yLabel }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let chartData = [];

  if (data && typeof data === "object") {
    chartData = Object.entries(data).map(([label, value]) => ({
      label,
      value,
    }));
  }

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
          keys={["value"]}
          indexBy="label"
          margin={{ top: 10, right: 50, bottom: 100, left: 75 }}
          padding={0.8}
          colors={colors.redAccent[500]}
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
