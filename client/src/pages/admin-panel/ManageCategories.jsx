import useManageCategories from "../../hooks/useManageCategories";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Search, Eye, Pencil, Trash2, CopyPlus } from "lucide-react";
import { cn } from "../../lib/utils";
const ManageCategories = () => {
  const { search, handleSearchChange, filteredCategories } =
    useManageCategories();
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="flex p-6 md:p-8 bg-gray-200 items-center justify-center mb-6 md:mb-8">
        <h1 className="text-blue-400 font-bold text-xl md:text-2xl">
          Manage Categories
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4 ml-1">
        <div className="relative w-full md:max-w-sm">
          <Input
            placeholder="Search categories..."
            className={cn("border pl-10")}
            value={search}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        <Button variant="primary" size="md" className="flex items-center">
          <CopyPlus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* table */}
      <div className="shadow border border-gray-200 sm:rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[800px] w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center">
                    No record found!
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category) => (
                  <tr key={category.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {category.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {category.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {category.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(category.created_at).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
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
export default ManageCategories;
