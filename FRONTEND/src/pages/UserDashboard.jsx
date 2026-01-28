// src/pages/UserDashboard.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import MyOrders from "../components/user/Orders";
import Profile from "../components/user/Profile";

const UserDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout role="User" />}>
        <Route index element={<MyOrders />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default UserDashboard;
