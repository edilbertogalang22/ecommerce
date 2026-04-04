import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import useAdminSidebar from "../../hooks/useAdminSidebar";
const AdminSidebar = () => {
  const { isOpen, handleOpen, handleClose, menuItems, linkStyle } =
    useAdminSidebar();
  return (
    <div>
      <header className="md:hidden flex justify-between items-center p-4 bg-gray-100 shadow">
        <h1 className="font-bold text-lg">Hi Admin</h1>
        <Button className="bg-white" onClick={handleOpen}>
          ☰
        </Button>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={handleClose}
        />
      )}

      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-screen w-64 bg-gray-800 text-white transition-transform duration-300 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo Mobile Close */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-white" />
              </div>
              <span>Dashboard</span>
            </div>
            <Button
              className="md:hidden bg-transparent p-1 rounded"
              onClick={handleClose}
            >
              ✖
            </Button>
          </div>
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                // If item has action (Logout)
                if (item.action) {
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          item.action();
                          handleClose();
                        }}
                        className="cursor-pointer flex items-center gap-3 p-3 w-full text-left text-blue-500 rounded hover:bg-gray-700 transition"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                    </li>
                  );
                }

                // Normal navigation
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={linkStyle}
                      onClick={handleClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};
export default AdminSidebar;
