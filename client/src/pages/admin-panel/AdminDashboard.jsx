import React, { useState, useEffect } from "react";
import useAdminDashboard from "../../hooks/useAdminDashboard";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "../../components/ui/Card";
import RecentUserCreated from "../../components/ui/RecentUserCreated";
import api from "../../api/api";

import { DollarSign, ShoppingCart, Package, Users } from "lucide-react";

const AdminDashboard = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);

  const { stats, loading, error } = useAdminDashboard();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersRes, productsRes] = await Promise.all([
          api.get("/admin/recent-orders"),
          api.get("/admin/low-stock-products"),
        ]);

        setRecentOrders(ordersRes.data);
        setLowStockProducts(productsRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <p>Loading Dashboard...</p>;
  if (error) return <p>Error loading stats: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 space-y-6">
      {/* Dashboard Header */}
      <div className="flex p-8 bg-gray-200 items-center justify-center rounded-lg shadow">
        <h1 className="text-blue-600 font-bold text-2xl">Admin Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Revenue
            </CardTitle>
            <DollarSign className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₱{stats.revenue}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Orders
            </CardTitle>
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.orders}</p>
            <p className="text-xs text-gray-500 mt-1">Pending Orders</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Products
            </CardTitle>
            <Package className="w-5 h-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.products}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Customers
            </CardTitle>
            <Users className="w-5 h-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.customers}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {recentOrders.length === 0 ? (
            <p className="text-gray-500 text-sm">No recent orders.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Customer</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Items</th>
                    <th className="px-4 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.customer_name}</td>
                      <td className="px-4 py-2">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-white text-xs ${
                            order.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        {Array.isArray(order.items) &&
                        order.items.length > 0 ? (
                          <div className="flex space-x-2 overflow-x-auto">
                            {order.items.map((item) => (
                              <div
                                key={item.product_id}
                                className="flex-shrink-0 w-28 bg-gray-50 p-1 rounded border"
                              >
                                <img
                                  src={item.image_url || "/placeholder.png"}
                                  alt={item.product_name}
                                  className="w-full h-16 object-cover rounded"
                                />
                                <p className="text-xs font-medium mt-1">
                                  {item.product_name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  x{item.quantity} × ₱{item.price}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">
                            No items found
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2 font-bold">
                        ₱{order.total_price}
                      </td>
                      <td className="px-4 py-2 flex flex-col space-y-1 uppercase">
                        {/* Order Status */}
                        <span
                          className={`px-2 py-1 rounded text-white text-xs ${
                            order.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        >
                          {order.status}
                        </span>

                        {/* Payment Status */}
                        <span
                          className={`px-2 py-1 rounded text-white text-xs ${
                            order.payment_status === "Paid"
                              ? "bg-green-600"
                              : order.payment_status === "Unpaid"
                                ? "bg-red-500"
                                : "bg-gray-400"
                          }`}
                        >
                          {order.payment_status || "Unknown"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Low Stock Products */}
      <Card>
        <CardHeader>
          <CardTitle>Low Stock Alert</CardTitle>
        </CardHeader>
        <CardContent>
          {lowStockProducts.length === 0 ? (
            <p className="text-gray-500 text-sm">
              All products are well-stocked.
            </p>
          ) : (
            <ul className="space-y-2">
              {lowStockProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between bg-red-50 px-4 py-2 rounded hover:bg-red-100"
                >
                  <span>{product.name}</span>
                  <span className="font-semibold text-red-600">
                    {product.stock}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Recent Users */}
      <div>
        <RecentUserCreated />
      </div>
    </div>
  );
};

export default AdminDashboard;
