const express = require("express");

const {
  predictFraud,
  getPredictions,
  getDashboardStats,
} = require("../controllers/predictionController");

const router = express.Router();

router.post("/predict", predictFraud);

router.get("/", getPredictions);

router.get("/stats", getDashboardStats);

module.exports = router;