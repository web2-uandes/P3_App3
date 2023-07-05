import React, { useEffect, useState } from "react";
import { fetchGroups } from "../Fetchs";
import Header from "../components/Header";

export default function Groups({ selectedGroup }) {
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState("");

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
            style={{ display: "flex", justifyContent: "space-around" }}
          ></div>
        </>
      )}
    </>
  );
}
