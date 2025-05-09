import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // بيانات افتراضية في حالة الفشل
  const fallbackOrders = [
    { id: "ORD101", date: "2025-04-01", total: 120, status: "Shipped" },
    { id: "ORD102", date: "2025-04-02", total: 250, status: "Pending" },
    { id: "ORD103", date: "2025-04-03", total: 95, status: "Delivered" },
    { id: "ORD104", date: "2025-04-04", total: 180, status: "Cancelled" },
    { id: "ORD105", date: "2025-04-05", total: 220, status: "Shipped" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch orders");
        setLoading(false);
        setOrders(fallbackOrders); // تعيين البيانات الافتراضية في حالة الفشل
      });
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    axios
      .patch(`http://localhost:5000/orders/${id}`, { status: newStatus })
      .then(() => {
        setOrders(
          orders.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order
          )
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2>Your Order History</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {orders.length === 0 && !loading && !error ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdateStatus(order.id, "Shipped")}
                  >
                    Mark as Shipped
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistory;
