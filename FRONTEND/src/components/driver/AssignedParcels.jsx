import React from "react";

const AssignedParcels = () => {
  const parcels = [
    { id: 1, sender: "John Doe", pickup: "Nairobi", destination: "Mombasa", status: "Pending" },
    { id: 2, sender: "Jane Smith", pickup: "Kisumu", destination: "Nakuru", status: "In Transit" },
  ];

  return (
    <div>
      <h2>Assigned Parcels</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Pickup</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map(parcel => (
            <tr key={parcel.id}>
              <td>{parcel.id}</td>
              <td>{parcel.sender}</td>
              <td>{parcel.pickup}</td>
              <td>{parcel.destination}</td>
              <td>{parcel.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedParcels;
