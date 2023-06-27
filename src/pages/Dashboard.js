import React, { useEffect, useState } from "react";
import DashBoardItem from "../components/DashBoardItem";
import { ListItem, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { fetchActiveEvaluations, fetchEvaluations } from "../Fetchs";

import QuizIcon from "@mui/icons-material/Quiz";
import TimelapseIcon from '@mui/icons-material/Timelapse';

export default function Dashboard() {
  // const [evaluations, setEvaluations] = useState(null);
  const [evalAmount, setEvalAmount] = useState(0);
  const [activeEvalAmount, setActiveEvalAmount] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evals = await fetchEvaluations();
        const actives = await fetchActiveEvaluations();
        //   setEvaluations(evals);
        setEvalAmount(evals.length);
        setActiveEvalAmount(actives.length);
      } catch (error) {
        console.log("Error fetching evaluation:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ListItem>
        <DashBoardItem
          title={evalAmount}
          subtitle="Total Evaluations"
          icon={
            <QuizIcon
              sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
            />
          }
        />
        <DashBoardItem title={activeEvalAmount} subtitle="Active Evaluations"
        icon={<TimelapseIcon sx={{ color: colors.greenAccent[400], fontSize: "26px" }}/>}/>
      </ListItem>
    </div>
  );
}
