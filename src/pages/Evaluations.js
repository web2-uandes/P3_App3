import React, { useEffect, useState } from "react";
import {
  fetchAllEvaluations,
  fetchEvaluationParticipation,
  fetchEvaluationResults,
} from "../Fetchs";
import PieGraph from "../components/PieGraph";
import Header from "../components/Header";
import ResultsBarChart from "../components/ResultsBarChart";

export default function Evaluations({ selectedEvaluation }) {
  const [evaluations, setEvaluations] = useState([]);
  const [evaluationId, setEvaluationId] = useState("");

  const [participation, setParticipation] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evals = await fetchAllEvaluations();
        setEvaluations(evals);
      } catch (error) {
        console.log("Error fetching evaluations:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let foundEvaluation = null;

    if (selectedEvaluation !== null || evaluations.length !== 0) {
      for (const evaluation of evaluations) {
        if (evaluation.name === selectedEvaluation) {
          foundEvaluation = evaluation;
          break; // Exit the loop when a matching evaluation is found
        }
      }
    }

    if (foundEvaluation) {
      setEvaluationId(foundEvaluation.id);
    } else {
      setEvaluationId("");
    }
  }, [selectedEvaluation, evaluations]);

  useEffect(() => {
    if (evaluationId === "") return;

    const fetchData = async () => {
      try {
        const part = await fetchEvaluationParticipation(evaluationId);
        const res = await fetchEvaluationResults(evaluationId);

        setParticipation(part);
        setResults(res);
        console.log("Res: ", res.questions);
      } catch {
        console.log("Failed to fetch.");
      }
    };
    fetchData();
  }, [evaluationId]);

  return (
    <>
      {evaluationId !== "" && (
        <>
          <Header title={selectedEvaluation} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {participation && (
              <div style={{ display: "inline-block" }}>
                <Header subtitle={"Participación"} />
                <PieGraph data={participation} />
              </div>
            )}
            {results && (
              <div style={{ display: "inline-block", minWidth: 300 }}>
                <Header subtitle={"Resultados"} />
                <ResultsBarChart
                  xLabel={"N° Pregunta"}
                  data={results["questions"]}
                  yLabel={"Cantidad"}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
