const axios = require("axios");
const Prediction = require("../models/Prediction");


exports.predictFraud = async (req, res) => {
  try {
    const {
       age,
  gender,
  vehicleAge,
  previousClaims,
  vehicleCategory,
  vehiclePrice,
  policyType,
  fault,
  policeReport,
  witnessPresent
    } = req.body;

    // Send data to Flask ML Service
    const mlResponse = await axios.post(
  "http://127.0.0.1:8000/predict",
  {
   age,
    gender,
    previousClaims,
    vehicleAge,
    vehicleCategory,
    vehiclePrice,
    policyType,
    fault,
    policeReport,
    witnessPresent
  }
);
    const prediction = mlResponse.data.prediction;

   const probability =
  mlResponse.data.probability;

    // Save prediction to MongoDB
    const savedPrediction = await Prediction.create({
      age,
  gender,
  vehicleAge,
  previousClaims,
  vehicleCategory,
  vehiclePrice,
  policyType,
  fault,
  policeReport,
  witnessPresent,
  prediction,
  probability,
    });

    res.status(200).json(savedPrediction);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
      error:error,
    });
  }
};
exports.getPredictions = async (req, res) => {
  try {
    const predictions = await Prediction.find()
      .sort({ createdAt: -1 });

    res.status(200).json(predictions);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getDashboardStats = async (req, res) => {
  try {

    const total = await Prediction.countDocuments();

    const fraud = await Prediction.countDocuments({
      prediction: "Fraud",
    });

    const genuine = await Prediction.countDocuments({
      prediction: "Genuine",
    });

    res.status(200).json({
      total,
      fraud,
      genuine,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};