import React, { useEffect, useState } from "react";
import DashBoardItem from "../components/DashBoardItem";
import { ListItem, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { fetchEvaluations } from "../Fetchs";

import QuizIcon from "@mui/icons-material/Quiz";

export default function Dashboard() {
  // const [evaluations, setEvaluations] = useState(null);
  const [evalAmount, setEvalAmount] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evals = await fetchEvaluations();
        //   setEvaluations(evals);
        setEvalAmount(evals.length);
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
          progress="0.75"
          icon={
            <QuizIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </ListItem>
    </div>
  );
}
