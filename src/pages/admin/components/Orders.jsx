import React from "react";
import { orders } from "../../../utils/data";

const Orders = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-semibold mb-6">Orders List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 border-b border-gray-300">Order ID</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">User ID</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Shipping Address</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Order Status</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Payment Status</th>
              <th className="text-right py-3 px-4 border-b border-gray-300">Total Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 border-b border-gray-300">{order.orderId}</td>
                <td className="py-3 px-4 border-b border-gray-300">{order.userId}</td>
                <td className="py-3 px-4 border-b border-gray-300">{order.shippingAddress}</td>
                <td
                  className={`py-3 px-4 border-b border-gray-300 font-semibold ${
                    order.OrderStatus === "Delivered"
                      ? "text-green-600"
                      : order.OrderStatus === "Cancelled"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {order.OrderStatus}
                </td>
                <td
                  className={`py-3 px-4 border-b border-gray-300 font-semibold ${
                    order.paymentStatus === "Paid"
                      ? "text-green-600"
                      : order.paymentStatus === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.paymentStatus}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-right font-semibold">
                  ₹{order.TotalPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
