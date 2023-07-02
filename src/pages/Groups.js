import React, { useEffect } from "react";
import { fetchGroups } from "../Fetchs";

export default function Groups({ groups, setGroups, selectedGroup }) {
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

  return <div>{selectedGroup}</div>;
}
