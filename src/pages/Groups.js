import React, { useEffect, useState } from "react";
import { fetchGroupResults, fetchGroups } from "../Fetchs";
import Header from "../components/Header";
import PieGraph from "../components/PieGraph";

export default function Groups({ selectedGroup }) {
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState("");

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gs = await fetchGroups();
        //   setEvaluations(evals);
        setGroups(gs);
      } catch (error) {
        console.log("Error fetching groups:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let foundEvaluation = null;

    if (selectedGroup !== null || groups.length !== 0) {
      for (const evaluation of groups) {
        if (evaluation.name === selectedGroup) {
          foundEvaluation = evaluation;
          break; // Exit the loop when a matching evaluation is found
        }
      }
    }

    if (foundEvaluation) {
      setGroupId(foundEvaluation.id);
    } else {
      setGroupId("");
    }
  }, [selectedGroup, groups]);

  useEffect(() => {
    if (groupId === "") return;

    const fetchData = async () => {
      try {
        const res = await fetchGroupResults(groupId);
        setResults(res);
      } catch {
        console.log("Failed to fetch.");
      }
    };
    fetchData();
  }, [groupId]);

  return (
    <>
      {groupId !== "" && (
        <>
          <Header title={selectedGroup} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {results.map((evaluation) => (
              <div key={evaluation.name}>
                <Header subtitle={evaluation.name} />
                <PieGraph
                  data={{
                    wrong_answers: evaluation.wrong_answers,
                    correct_answers: evaluation.correct_answers,
                    in_progress: evaluation.in_progress,
                    not_answered: evaluation.not_answered,
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
