import React from "react";

const Profile = () => {
  const driver = {
    name: "Alex Mwangi",
    email: "alex@example.com",
    phone: "0712345678"
  };

  return (
    <div className="profile-card">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {driver.name}</p>
      <p><strong>Email:</strong> {driver.email}</p>
      <p><strong>Phone:</strong> {driver.phone}</p>
    </div>
  );
};

export default Profile;
