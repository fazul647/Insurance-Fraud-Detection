import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PredictFraud from "./pages/PredictFraud";
import PredictionHistory from "./pages/PredictionHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/predict" element={<PredictFraud />} />
        <Route path="/history" element={<PredictionHistory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;