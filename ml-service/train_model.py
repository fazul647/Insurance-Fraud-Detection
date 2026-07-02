import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
from lightgbm import LGBMClassifier
import joblib

# Load dataset
df = pd.read_csv("carclaims.csv")

# Select columns
columns = [
    "Age",
    "Sex",
    "PastNumberOfClaims",
    "AgeOfVehicle",
    "VehicleCategory",
    "VehiclePrice",
    "PolicyType",
    "Fault",
    "PoliceReportFiled",
    "WitnessPresent",
    "FraudFound"
]

df = df[columns]

# Remove missing values
df.dropna(inplace=True)

# Encode categorical columns
encoders = {}

for col in df.columns:
    if df[col].dtype == "object":
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col].astype(str))
        encoders[col] = le

# Save encoders
joblib.dump(encoders, "encoders.pkl")

# Features and target
X = df.drop("FraudFound", axis=1)
y = df["FraudFound"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# LightGBM Model
model = LGBMClassifier(
    n_estimators=300,
    learning_rate=0.05,
    scale_pos_weight = 14497 / 923,
    random_state=42
)

# Train model
model.fit(X_train, y_train)

# Predictions
pred = model.predict(X_test)

# Evaluation
print("Accuracy:", accuracy_score(y_test, pred))

print("\nClass Distribution:")
print(df["FraudFound"].value_counts())

print("\nClassification Report:")
print(classification_report(y_test, pred))

# Save model
joblib.dump(model, "fraud_model.pkl")

print("\nModel Saved Successfully")