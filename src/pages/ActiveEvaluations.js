import React, { useEffect, useState } from "react";
import {
  fetchActiveEvaluations,
  fetchEvaluationParticipation,
  fetchEvaluationResults,
} from "../Fetchs";
import Header from "../components/Header";
import PieGraph from "../components/PieGraph";
import ResultsBarChart from "../components/ResultsBarChart";

export default function ActiveEvaluations({ selectedActiveEvaluation }) {
  const [actives, setActiveEvaluations] = useState([]);
  const [activeEvaluationId, setActiveEvaluationId] = useState("");

  const [participation, setParticipation] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evals = await fetchActiveEvaluations();
        setActiveEvaluations(evals);
        console.log(evals);
      } catch (error) {
        console.log("Error fetching evaluations:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let foundEvaluation = null;

    if (selectedActiveEvaluation !== null || actives.length !== 0) {
      for (const evaluation of actives) {
        if (evaluation.name === selectedActiveEvaluation) {
          foundEvaluation = evaluation;
          break; // Exit the loop when a matching evaluation is found
        }
      }
    }

    if (foundEvaluation) {
      setActiveEvaluationId(foundEvaluation.id);
    } else {
      setActiveEvaluationId("");
    }
  }, [actives, selectedActiveEvaluation]);

  useEffect(() => {
    if (activeEvaluationId === "") return;

    const fetchData = async () => {
      try {
        const part = await fetchEvaluationParticipation(activeEvaluationId);
        const res = await fetchEvaluationResults(activeEvaluationId);

        setParticipation(part);
        setResults(res);
      } catch {
        console.log("Failed to fetch.");
      }
    };
    fetchData();
  }, [activeEvaluationId]);

  return (
    <>
      {activeEvaluationId !== "" && (
        <>
          <Header title={selectedActiveEvaluation} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {participation && (
              <div style={{ display: "inline-block", width: 300 }}>
                <Header subtitle={"Participación"} />
                <PieGraph data={participation} />
              </div>
            )}
            {results && (
              <div style={{ display: "inline-block", width: 300 }}>
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
