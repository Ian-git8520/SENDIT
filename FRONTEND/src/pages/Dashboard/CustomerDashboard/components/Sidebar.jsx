import React from "react";
import "./Sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard" },
        { id: "parcels", label: "My Parcels" },
        { id: "create", label: "Create Parcel" },
        { id: "profile", label: "Profile" },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>SendIT</h2>
                <p className="user-role">Customer Portal</p>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
