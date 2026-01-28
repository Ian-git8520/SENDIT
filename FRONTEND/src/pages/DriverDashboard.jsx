// src/pages/DriverDashboard.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AssignedParcels from "../components/driver/AssignedParcels";
import Profile from "../components/driver/Profile";



const DriverDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout role="Driver" />}>
        <Route index element={<AssignedParcels />} />
        <Route path="orders" element={<AssignedParcels />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default DriverDashboard;


