import useProfile from "../../hooks/useProfile";
import { User } from "lucide-react";

const UserProfile = () => {
  const { user, orders } = useProfile();

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <title>Profile Settings</title>
      {/* Header */}
      <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-500 text-sm">
          Manage your personal information
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Avatar */}
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={50} className="text-gray-500" />
          </div>

          <button className="absolute bottom-0 right-2 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600">
            ✎
          </button>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.firstname} {user.lastname}
          </h2>

          <p className="text-gray-500">{user.email}</p>

          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
          Account Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-400">Full Name</p>
            <p className="font-medium text-gray-800">
              {user.firstname} {user.lastname}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium text-gray-800">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium text-gray-800">{user.contact}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Address</p>
            <p className="font-medium text-gray-800">{user.address}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-400">Date Joined</p>
            <p className="font-medium text-gray-800">
              {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      {/* ORDER HISTORY */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
          Order History
        </h3>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                {/* LEFT: Order Info */}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-gray-800">
                    Order #{order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">
                    Payment:{" "}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        order.payment_status.toLowerCase() === "paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {order.payment_status}
                    </span>
                  </p>
                </div>

                {/* RIGHT: Total & Status */}
                <div className="flex flex-col items-start md:items-end gap-2">
                  <p className="font-bold text-blue-600 text-lg">
                    ₱{order.total_price.toLocaleString()}
                  </p>

                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                      order.status.toLowerCase() === "delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status.toLowerCase() === "shipped"
                          ? "bg-purple-100 text-purple-700"
                          : order.status.toLowerCase() === "approved"
                            ? "bg-blue-100 text-blue-700"
                            : order.status.toLowerCase() === "cancel"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Items (Mini-Receipt) */}
              <div className="mt-4 border-t pt-4 space-y-3">
                {order.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium text-gray-700">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-blue-600">₱{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
