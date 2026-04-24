import { useEffect, useState } from "react";
import api from "../../api/api";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Approved: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancel: "bg-red-100 text-red-700",
};
const paymentStatusColors = {
  pending: "bg-gray-100 text-gray-700",
  paid: "bg-green-100 text-green-700",
};

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/admin/orders");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/orders/update-order/${id}`, { status });

      setOrders((prev) =>
        prev.map((o) => (o.order_id === id ? { ...o, status } : o)),
      );
    } catch (err) {
      console.error("Update status failed:", err);
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">No orders found.</div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders Management</h1>
        <p className="text-gray-500 text-sm">
          Monitor and manage all customer orders
        </p>
      </div>

      {/* ORDERS */}
      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order.order_id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* TOP */}
            <div className="flex justify-between border-b pb-4">
              <div>
                <h2 className="font-bold text-lg">Order #{order.order_id}</h2>
                <p className="text-sm text-gray-500">
                  {order.customer_name} • {order.email}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(order.created_at).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap items-center">
                {/* PAYMENT STATUS */}
                <span
                  className={`inline-flex items-center justify-center min-w-[90px] px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    paymentStatusColors[order.payment_status?.toLowerCase()] ||
                    "bg-gray-200 text-gray-700"
                  }`}
                >
                  {order.payment_status}
                </span>

                {/* ORDER STATUS */}
                <span
                  className={`inline-flex items-center justify-center min-w-[90px] px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    statusColors[order.status] || "bg-gray-200 text-gray-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {/* ITEMS */}
              <div className="md:col-span-2 space-y-3">
                <h3 className="font-semibold text-gray-700">Items</h3>

                {order.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <img
                      src={item.image_url}
                      className="w-12 h-12 object-cover rounded"
                      alt={item.name}
                    />

                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-blue-600">₱{item.price}</p>
                  </div>
                ))}
              </div>

              {/* SUMMARY */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Order Summary</h3>

                <p className="text-sm text-gray-600">Total</p>
                <p className="text-xl font-bold text-blue-600">
                  ₱{order.total_price}
                </p>

                {/* STATUS UPDATE */}
                <div className="mt-4">
                  <label className="text-xs text-gray-500">Update Status</label>

                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order.order_id, e.target.value)
                    }
                    className="w-full mt-1 border rounded px-2 py-2 text-sm"
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancel</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
