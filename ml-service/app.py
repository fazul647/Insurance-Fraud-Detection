from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load trained model and encoders
model = joblib.load("fraud_model.pkl")
encoders = joblib.load("encoders.pkl")


@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        input_data = pd.DataFrame([{
            "Age": int(data["age"]),
            "Sex": encoders["Sex"].transform([data["gender"]])[0],
            "PastNumberOfClaims": int(data["previousClaims"]),
            "AgeOfVehicle": encoders["AgeOfVehicle"].transform(
                [data["vehicleAge"]]
            )[0],
            "VehicleCategory": encoders["VehicleCategory"].transform(
                [data["vehicleCategory"]]
            )[0],
            "VehiclePrice": encoders["VehiclePrice"].transform(
                [data["vehiclePrice"]]
            )[0],
            "PolicyType": encoders["PolicyType"].transform(
                [data["policyType"]]
            )[0],
            "Fault": encoders["Fault"].transform(
                [data["fault"]]
            )[0],
            "PoliceReportFiled": encoders["PoliceReportFiled"].transform(
                [data["policeReport"]]
            )[0],
            "WitnessPresent": encoders["WitnessPresent"].transform(
                [data["witnessPresent"]]
            )[0]
        }])

        # Predict probabilities
        probabilities = model.predict_proba(input_data)[0]

        fraud_probability = probabilities[1]

        # Custom Threshold (30%)
        THRESHOLD = 0.30

        if fraud_probability >= THRESHOLD:
            result = "Fraud"
        else:
            result = "Genuine"

        fraud_probability = round(fraud_probability * 100, 2)

        # Debug output
        print("--------------------------------")
        print("Input:")
        print(input_data)
        print("Fraud Probability:", fraud_probability)
        print("Prediction:", result)
        print("--------------------------------")

        return jsonify({
            "prediction": result,
            "probability": fraud_probability
        })

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=8000)