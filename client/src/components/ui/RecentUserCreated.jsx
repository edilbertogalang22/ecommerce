import useRecentUser from "../../hooks/useRecentUser";
import { User } from "lucide-react";

const RecentUserCreated = () => {
  const { recentUsers } = useRecentUser();

  return (
    <div className="mt-8 bg-white shadow rounded-lg p-6">
      <h2 className="font-semibold mb-4 text-blue-500 flex items-center gap-2">
        <User /> Recent Users Registered
      </h2>

      <div className="space-y-3">
        {recentUsers.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No users registered in the last 7 days.
          </p>
        ) : (
          recentUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm">
                  {user.firstname.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium">
                  {user.firstname} {user.lastname}
                </span>
              </div>
              <span className="text-gray-500 text-sm">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentUserCreated;
