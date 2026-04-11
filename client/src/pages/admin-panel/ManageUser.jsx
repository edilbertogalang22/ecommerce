import useManageUser from "../../hooks/useManageUser";
import Input from "../../components/ui/Input";
import { Search, Eye, Pencil, Trash2 } from "lucide-react";
import Button from "../../components/ui/Button";

import { cn } from "../../lib/utils";
const ManageUser = () => {
  const { search, handleSearchChange, filteredUsers } = useManageUser();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Page Header */}
      <div className="flex p-6 md:p-8 bg-gray-200 items-center justify-center mb-6 md:mb-8 ">
        <h1 className="text-blue-400 font-bold text-xl md:text-2xl">
          Manage Users
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4 ml-1">
        <div className="relative w-full md:max-w-sm">
          <Input
            placeholder="Search users..."
            className={cn("border pl-10")}
            value={search}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* table */}
      <div className="shadow border border-gray-200 sm:rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[800px] w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.filter((user) => user.user_type !== 1).length ===
              0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers
                  .filter((user) => user.user_type !== 1)
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.firstname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.lastname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span
                          className={cn(
                            "px-2 py-1 inline-flex text-xs font-semibold rounded-full",
                            user.status === 1
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800",
                          )}
                        >
                          {user.status === 1 ? "✔ Online" : "✖ Offline"}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <Button variant="primary" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>

                          <Button variant="secondary" size="sm">
                            <Pencil className="w-4 h-4" />
                          </Button>

                          <Button variant="danger" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
