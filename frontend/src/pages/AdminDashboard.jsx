import React from "react";
import { useAuth } from "../context/authContext";

function AdminDashboard() {
  const { user } = useAuth();
  return <div>Admin Dashbaord {user.name}</div>;
}

export default AdminDashboard;
