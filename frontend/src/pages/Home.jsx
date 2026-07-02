import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center">
        <h1 className="display-4 fw-bold">
          🛡️ Insurance Fraud Detection System
        </h1>

        <p className="lead mt-3">
          Detect fraudulent insurance claims using Artificial Intelligence.
        </p>

        <Link to="/predict" className="btn btn-primary btn-lg mt-3">
          Predict Fraud
        </Link>
      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>⚡ Fast Predictions</h3>
            <p>
              Get instant fraud predictions using Machine Learning models.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>📊 Analytics Dashboard</h3>
            <p>
              Visualize fraud statistics and prediction history.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>🔒 Secure System</h3>
            <p>
              User authentication and secure prediction storage.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;