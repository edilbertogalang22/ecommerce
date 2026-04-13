import useManageUser from "../../hooks/useManageUser";
import { useModal } from "../../context/ModalContext";
import ViewUsersModal from "../../components/ui/modal/usersmodal/ViewUsersModal";
import UpdateUsersModal from "../../components/ui/modal/usersmodal/UpdateUsersModal";
import DeleteUsersModal from "../../components/ui/modal/usersmodal/DeleteUsersModal";

import Input from "../../components/ui/Input";
import { Search, Eye, Pencil, Trash2 } from "lucide-react";
import Button from "../../components/ui/Button";
import { cn } from "../../lib/utils";

const ManageUser = () => {
  const {
    search,
    handleSearchChange,
    filteredUsers,
    handleUpdateUser,
    handleDeleteUser,
  } = useManageUser();
  
  const { openModal, closeModal, modalType, modalData } = useModal();

  // remove admin users once (cleaner)
  const users = filteredUsers.filter((user) => user.user_type !== 1);

  const modalMap = {
    view: <ViewUsersModal onClose={closeModal} user={modalData} />,
    edit: (
      <UpdateUsersModal
        onClose={closeModal}
        user={modalData}
        onSubmit={handleUpdateUser}
      />
    ),
    delete: (
      <DeleteUsersModal
        onClose={closeModal}
        user={modalData}
        onConfirm={handleDeleteUser}
      />
    ),
  };

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
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date Registered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-4 text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 text-sm">{user.id}</td>
                    <td className="px-6 py-4 text-sm">
                      {`${user.firstname} ${user.lastname}`}
                    </td>
                    <td className="px-6 py-4 text-sm">{user.address}</td>
                    <td className="px-6 py-4 text-sm">
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

                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {new Date(user.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </td>

                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => openModal("view", user)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => openModal("edit", user)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => openModal("delete", user)}
                        >
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

      {/* MODAL RENDER (FIXED) */}
      {modalMap[modalType] || null}
    </div>
  );
};

export default ManageUser;
