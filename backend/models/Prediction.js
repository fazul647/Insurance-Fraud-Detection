const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      default: "Anonymous",
    },

    age: Number,
    gender: String,
    
    vehicleAge: String,
    previousClaims: Number,
    policeReport: String,
    witnessPresent: String,
   vehicleCategory: String,
vehiclePrice: String,
policyType: String,
fault: String,

    prediction: String,
    probability: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Prediction",
  predictionSchema
);