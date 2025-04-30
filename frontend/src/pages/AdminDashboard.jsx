import React from "react";
import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { user } = useAuth();
  // const { user, loading } = useAuth();
  // const navigate = useNavigate();
  // if (loading) {
  //   return <div>Loading..... </div>;
  // }
  // if (!user) {
  //   navigate("/login");
  // }
  return <div>Admin Dashbaord {user && user.name}</div>;
}

export default AdminDashboard;
