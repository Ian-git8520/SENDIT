import React from "react";
import "./Dashboard.css";

const MyOrders = () => {
  return (
    <div>
      <h3>My Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Parcel ID</th>
            <th>Status</th>
            <th>Pickup</th>
            <th>Destination</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>Pending</td>
            <td>Nairobi</td>
            <td>Mombasa</td>
            <td>
              <button className="btn-update">Change Destination</button>
              <button className="btn-update">Cancel Order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;