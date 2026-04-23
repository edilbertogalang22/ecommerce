import useProfile from "../../hooks/useProfile";
import { User } from "lucide-react";

const UserProfile = () => {
  const { user } = useProfile();

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
    </div>
  );
};

export default UserProfile;
