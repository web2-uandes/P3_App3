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
            throw new Error('Failed to fetch evaluation');
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
            throw new Error('Failed to fetch active evaluation');
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

export function fetchGroup(groupId){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/groups/${groupId}`, {
            method: "GET",
            headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
            // 'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch group.');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Group: ", data);
            resolve(data);
          })
          .catch((error) => {
            console.log("Group Error: ", error);
            reject(error);
          });
    });
}


export async function fetchResults(evaluationId, memberId){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/evaluations/${evaluationId}/assignment/${memberId}/results`, {
            method: "GET",
            // body: JSON.stringify({
            //     'answer': answer
            // }),
            // headers: {
            // 'Content-type': 'application/json; charset=UTF-8',
            // }
        }).then((response) => {
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
    })
}
