import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router";

import Login from "./pages/Login";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router";

import AdminDashboard from "./pages/AdminDashboard";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
    </Routes>
    <App />
  </BrowserRouter>
);
