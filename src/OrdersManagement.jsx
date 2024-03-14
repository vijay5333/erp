import React, { useState } from "react";


const OrdersManagement = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customerId: 1, orderDate: "2024-03-12", status: "Pending" },
    { id: 2, customerId: 2, orderDate: "2024-03-13", status: "Completed" },
    { id: 3, customerId: 3, orderDate: "2024-03-14", status: "Processing" },
    { id: 4, customerId: 1, orderDate: "2024-03-15", status: "Pending" },
    { id: 5, customerId: 2, orderDate: "2024-03-16", status: "completed" },
  ]);

  // Function to delete an order
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <main className="main-container">
    <div><h2>Total Orders - {orders.length}</h2></div>
      <h2>Orders Management</h2>
      <table className="table table-success table-striped border-primary border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerId}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default OrdersManagement;
