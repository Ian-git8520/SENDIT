// src/pages/AdminDashboard.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Orders from "../components/user/Orders";
import Profile from "../components/user/Profile";
import MyOrders from "../components/user/Orders";

const AdminDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout role="Admin" />}>
        <Route index element={<Orders />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AdminDashboard;

