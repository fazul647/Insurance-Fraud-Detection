# 🛡️ Insurance Fraud Detection System

An AI-powered Insurance Fraud Detection System built using the MERN Stack, Flask, and Machine Learning. The system predicts whether an insurance claim is fraudulent or genuine using a trained LightGBM model.

---

## 📌 Project Overview

Insurance fraud causes significant financial losses every year. This project helps insurance companies identify potentially fraudulent claims using machine learning and provides an easy-to-use web interface for users.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- 🤖 AI-based Fraud Prediction
- 📊 Dashboard with Prediction Statistics
- 📜 Prediction History
- 💾 MongoDB Atlas Database
- 🌐 REST API using Express.js
- 🧠 LightGBM Machine Learning Model
- 🐍 Flask ML Service Integration
- 📱 Responsive React Frontend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

### Machine Learning
- Python
- Flask
- Pandas
- Scikit-learn
- LightGBM
- Joblib

---

## 📂 Project Structure

```
Insurance-Fraud-Detection/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   └── server.js
│
├── ml-service/
│   ├── app.py
│   ├── train_model.py
│   ├── fraud_model.pkl
│   ├── encoders.pkl
│   └── insurance_claims.csv
│
└── README.md
```

---

## 📊 Dataset

- Real-world Insurance Fraud Claims Dataset
- Records: **15,420**
- Machine Learning Algorithm: **LightGBM**

### Features Used

- Age
- Gender
- Vehicle Age
- Previous Claims
- Vehicle Category
- Vehicle Price
- Policy Type
- Fault
- Police Report Filed
- Witness Present

Target Variable:

- Fraud
- Genuine

---

## 🧠 Machine Learning Model

Algorithm:

- LightGBM Classifier

Performance:

- Accuracy: **~87%** (varies depending on training configuration)

The trained model is exposed through a Flask REST API and consumed by the Node.js backend.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/fazul647/Insurance-Fraud-Detection.git
cd Insurance-Fraud-Detection
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### ML Service

```bash
cd ml-service

pip install -r requirements.txt

python train_model.py

python app.py
```

---

## 🔗 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Prediction

```
POST /api/predictions/predict
GET /api/predictions
GET /api/predictions/stats
```

---

## 📸 Screenshots

Add screenshots here after uploading them.

### Login

```
screenshots/login.png
```

### Dashboard

```
screenshots/dashboard.png
```

### Prediction

```
screenshots/predict.png
```

### History

```
screenshots/history.png
```

---

## 🎯 Future Enhancements

- Email Notifications
- Explainable AI (SHAP)
- Model Retraining
- Admin Dashboard
- Charts & Analytics
- Claim Document Upload
- Cloud Deployment

---

## 👨‍💻 Developer

**Fazul Ahammad Shaik**

GitHub:
https://github.com/fazul647

LinkedIn:
(Add your LinkedIn profile)

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.

---

## 📜 License
