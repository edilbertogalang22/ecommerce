import useAdminDashboard from "../../hooks/useAdminDashboard";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "../../components/ui/Card";

import { DollarSign, ShoppingCart, Package, Users } from "lucide-react";

const AdminDashboard = () => {
  const { stats, loading, error } = useAdminDashboard(); // tawag sa custom hook
  if (loading) return <p>Loading Dashboard...</p>;
  if (error) return <p>Error loading stats: {error.message}</p>;
  return (
    <div className="min-h-screen space-y-6 ml-1 mr-1">
      <div className="flex p-8 bg-gray-200 items-center justify-center">
        <h1 className="text-blue-400 font-bold text-2xl">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 ml-1">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
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
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Orders
            </CardTitle>
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₱{stats.orders}</p>
            <p className="text-xs text-gray-600 mt-1">Pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
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
          <CardHeader className="flex flex-row items-center justify-between pb-2">
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
      {/* Recent Orders */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>{/* Table */}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Low Stock Alert</CardTitle>
        </CardHeader>
        <CardContent>{/* Table */}</CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
