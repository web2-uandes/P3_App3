/* eslint-disable no-unused-vars */
// const API_URL = "https://web-p3-backend.herokuapp.com";
const API_URL = "http://localhost:8000";

export function fetchEvaluations() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/evaluations/`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch evaluation");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Evaluations: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Evaluations Error: ", error);
        reject(error);
      });
  });
}

export function fetchActiveEvaluations() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/evaluations/active`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch active evaluation");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Active evaluations: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Active evaluations Error: ", error);
        reject(error);
      });
  });
}

export function fetchMonthlyEvaluations() {
  const params = new URLSearchParams({
    number_result: true,
    option: "monthly",
  });
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/evaluations/?${params}`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Monthly evaluation");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Monthly Evaluations: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Monthly Evaluations Error: ", error);
        reject(error);
      });
  });
}

export function fetchDailyEvaluations() {
  const params = new URLSearchParams({
    number_result: true,
    option: "answered",
  });
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/evaluations/?${params}`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Daily evaluation");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Daily Evaluations: ", data["answered"]);
        resolve(data["answered"]);
      })
      .catch((error) => {
        console.log("Daily Evaluations Error: ", error);
        reject(error);
      });
  });
}

export function fetchGroups() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/groups`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch groups.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Groups: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Group Error: ", error);
        reject(error);
      });
  });
}

export function fetchActivesPercentage() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Active Percentage.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Active Percentage: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Active Percentage Error: ", error);
        reject(error);
      });
  });
}

export function fetchDoneVsStarted() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Done/Started.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Done/Started: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Done/Started Error: ", error);
        reject(error);
      });
  });
}

export async function fetchResults(evaluationId, memberId) {
  return new Promise((resolve, reject) => {
    fetch(
      `${API_URL}/evaluations/${evaluationId}/assignment/${memberId}/results`,
      {
        method: "GET",
        // body: JSON.stringify({
        //     'answer': answer
        // }),
        // headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        // }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Get Results: ", data);
        resolve(data);
      })
      .catch((error) => {
        console.log("Get Results Error: ", error);
        reject(error);
      });
  });
}
