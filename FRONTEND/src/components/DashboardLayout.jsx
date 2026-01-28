import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>SendIT Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="">My Orders</Link></li>
            <li><Link to="profile">Profile</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;






