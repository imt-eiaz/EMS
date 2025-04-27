import { BrowserRouter } from "react-router";

import Login from "./pages/Login";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router";

import AdminDashboard from "./pages/AdminDashboard";

function App() {
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </BrowserRouter>
    ;
  </>;
}

export default App;
