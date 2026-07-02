import React, { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const [stats, setStats] = useState({
    totalPredictions: 0,
    fraudCases: 0,
    genuineCases: 0,
    fraudRate: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/predictions/stats");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = {
    labels: ["Fraud Cases", "Genuine Cases"],
    datasets: [
      {
        data: [
          stats.fraudCases,
          stats.genuineCases,
        ],
        backgroundColor: [
          "#dc3545",
          "#198754",
        ],
      },
    ],
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        📊 Fraud Analytics Dashboard
      </h1>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center p-4">
            <h3>{stats.totalPredictions}</h3>
            <p>Total Predictions</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center p-4">
            <h3 className="text-danger">
              {stats.fraudCases}
            </h3>
            <p>Fraud Cases</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center p-4">
            <h3 className="text-success">
              {stats.genuineCases}
            </h3>
            <p>Genuine Cases</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center p-4">
            <h3>{stats.fraudRate}%</h3>
            <p>Fraud Rate</p>
          </div>
        </div>

      </div>

      <div className="card shadow p-4 mt-4">
        <h3 className="text-center mb-4">
          Fraud Distribution
        </h3>

        <div style={{ width: "400px", margin: "auto" }}>
          <Pie data={chartData} />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;