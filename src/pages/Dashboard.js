import React, { useEffect, useState } from "react";
import DashBoardItem from "../components/DashBoardItem";
import { ListItem, useTheme } from "@mui/material";
import { tokens } from "../theme";
import {
  fetchActiveEvaluations,
  fetchDailyEvaluations,
  fetchDoneVsStarted,
  fetchEvaluations,
  fetchMonthlyEvaluations,
} from "../Fetchs";

import QuizIcon from "@mui/icons-material/Quiz";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import BarGraph from "../components/BarGraph";
import Header from "../components/Header";
import PieGraph from "../components/PieGraph";

export default function Dashboard() {
  // const [evaluations, setEvaluations] = useState(null);
  const [evalAmount, setEvalAmount] = useState(0);
  const [activeEvalAmount, setActiveEvalAmount] = useState(0);
  const [monthly, setMonthly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [completed, setCompleted] = useState(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evals = await fetchEvaluations();
        const actives = await fetchActiveEvaluations();
        const month = await fetchMonthlyEvaluations();
        const day = await fetchDailyEvaluations();
        const done = await fetchDoneVsStarted();

        //   setEvaluations(evals);
        setEvalAmount(evals);
        setActiveEvalAmount(actives.length);
        setMonthly(month);
        setDaily(day);
        setCompleted(done);
      } catch (error) {
        console.log("Error fetching evaluation:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title={"Total"} subtitle={"Evaluaciones historicas y activas"} />
      <ListItem>
        <DashBoardItem
          title={evalAmount}
          subtitle="Total Evaluations"
          icon={
            <QuizIcon
              sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
            />
          }
        />
        <DashBoardItem
          title={activeEvalAmount}
          subtitle="Active Evaluations"
          icon={
            <TimelapseIcon
              sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
            />
          }
        />
      </ListItem>
      <BarGraph
        title={"Evaluaciones por mes"}
        data={monthly}
        xLabel={"Mes"}
        yLabel={"Evaluaciones"}
      />
      <BarGraph
        title={"Preguntas respondidas por dia"}
        data={daily}
        xLabel={"Dia"}
        yLabel={"Preguntas"}
      />
      <Header
        title={"Evaluaciones Activas"}
        subtitle={"Completadas v/s Empezadas"}
      />
      <PieGraph data={completed} />
    </div>
  );
}
