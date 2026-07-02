import React, { useEffect, useState } from "react";
import API from "../services/api";

function PredictionHistory() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const res = await API.get("/predictions");
      setPredictions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        📜 Prediction History
      </h2>

      <table className="table table-striped table-bordered">

        <thead>
          <tr>
            <th>Age</th>
            <th>Vehicle Category</th>
            <th>Policy Type</th>
            <th>Prediction</th>
            <th>Probability</th>
          </tr>
        </thead>

        <tbody>

          {predictions.map((item) => (
            <tr key={item._id}>
              <td>{item.age}</td>

              <td>{item.vehicleCategory}</td>

              <td>{item.policyType}</td>

              <td>
                <span
                  className={
                    item.prediction === "Fraud"
                      ? "badge bg-danger"
                      : "badge bg-success"
                  }
                >
                  {item.prediction}
                </span>
              </td>

              <td>{item.probability}%</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PredictionHistory;