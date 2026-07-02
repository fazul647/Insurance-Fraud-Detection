import React, { useState } from "react";
import API from "../services/api";

function PredictFraud() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    vehicleAge: "",
    previousClaims: "",
    vehicleCategory: "",
    vehiclePrice: "",
    policyType: "",
    fault: "",
    policeReport: "No",
    witnessPresent: "No",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/predictions/predict",
        formData
      );

      setResult(res.data);
    } catch (error) {
      console.log(error);
      alert("Prediction Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          🛡️ Insurance Fraud Prediction
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="row">

            {/* Age */}
            <div className="col-md-6 mb-3">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div className="col-md-6 mb-3">
              <label>Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Vehicle Age */}
            <div className="col-md-6 mb-3">
              <label>Vehicle Age</label>
              <select
                className="form-select"
                name="vehicleAge"
                value={formData.vehicleAge}
                onChange={handleChange}
                required
              >
                <option value="">Select Vehicle Age</option>
                <option value="new">New</option>
                <option value="2 years">2 Years</option>
                <option value="3 years">3 Years</option>
                <option value="4 years">4 Years</option>
                <option value="5 years">5 Years</option>
                <option value="6 years">6 Years</option>
                <option value="7 years">7 Years</option>
                <option value="more than 7">
                  More Than 7 Years
                </option>
              </select>
            </div>

            {/* Previous Claims */}
            <div className="col-md-6 mb-3">
              <label>Previous Claims</label>
              <input
                type="number"
                className="form-control"
                name="previousClaims"
                value={formData.previousClaims}
                onChange={handleChange}
                required
              />
            </div>

            {/* Vehicle Category */}
            <div className="col-md-6 mb-3">
              <label>Vehicle Category</label>
              <select
                className="form-select"
                name="vehicleCategory"
                value={formData.vehicleCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Sport">Sport</option>
                <option value="Utility">Utility</option>
                <option value="Sedan">Sedan</option>
              </select>
            </div>

            {/* Vehicle Price */}
            <div className="col-md-6 mb-3">
              <label>Vehicle Price</label>
              <select
                className="form-select"
                name="vehiclePrice"
                value={formData.vehiclePrice}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="less than 20,000">
                  Less than 20,000
                </option>
                <option value="20,000 to 29,000">
                  20,000 to 29,000
                </option>
                <option value="30,000 to 39,000">
                  30,000 to 39,000
                </option>
                <option value="40,000 to 59,000">
                  40,000 to 59,000
                </option>
                <option value="60,000 to 69,000">
                  60,000 to 69,000
                </option>
                <option value="more than 69,000">
                  More than 69,000
                </option>
              </select>
            </div>

            {/* Policy Type */}
            <div className="col-md-6 mb-3">
              <label>Policy Type</label>
              <select
                className="form-select"
                name="policyType"
                value={formData.policyType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Sport - Liability">
                  Sport - Liability
                </option>
                <option value="Sport - Collision">
                  Sport - Collision
                </option>
                <option value="Sport - All Perils">
                  Sport - All Perils
                </option>
                <option value="Sedan - Liability">
                  Sedan - Liability
                </option>
                <option value="Sedan - Collision">
                  Sedan - Collision
                </option>
                <option value="Sedan - All Perils">
                  Sedan - All Perils
                </option>
                <option value="Utility - Liability">
                  Utility - Liability
                </option>
                <option value="Utility - Collision">
                  Utility - Collision
                </option>
                <option value="Utility - All Perils">
                  Utility - All Perils
                </option>
              </select>
            </div>

            {/* Fault */}
            <div className="col-md-6 mb-3">
              <label>Fault</label>
              <select
                className="form-select"
                name="fault"
                value={formData.fault}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Policy Holder">
                  Policy Holder
                </option>
                <option value="Third Party">
                  Third Party
                </option>
              </select>
            </div>

            {/* Police Report */}
            <div className="col-md-6 mb-3">
              <label>Police Report Filed</label>
              <select
                className="form-select"
                name="policeReport"
                value={formData.policeReport}
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Witness Present */}
            <div className="col-md-6 mb-3">
              <label>Witness Present</label>
              <select
                className="form-select"
                name="witnessPresent"
                value={formData.witnessPresent}
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

          </div>

          <button
            className="btn btn-danger w-100"
            type="submit"
          >
            Predict Fraud
          </button>

        </form>

        {result && (
          <div className="card mt-4 p-3 text-center">
            <h3>
              Prediction:{" "}
              <span
                className={
                  result.prediction === "Fraud"
                    ? "text-danger"
                    : "text-success"
                }
              >
                {result.prediction}
              </span>
            </h3>

            <h4>
              Probability: {result.probability}%
            </h4>
          </div>
        )}

      </div>
    </div>
  );
}

export default PredictFraud;