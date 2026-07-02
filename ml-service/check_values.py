import pandas as pd

df = pd.read_csv("carclaims.csv")

columns = [
    "VehicleCategory",
    "VehiclePrice",
    "PolicyType",
    "Fault"
]

for col in columns:
    print(f"\n{col}:")
    print(df[col].unique())