import { StrictMode } from "react";
import AuthContext from "./context/authContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Login from "./pages/Login";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBaseRoutes from "./utils/RoleBaseRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        ></Route>
      </Routes>
      <App />
    </BrowserRouter>
  </AuthContext>
);
