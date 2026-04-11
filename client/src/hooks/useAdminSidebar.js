import { useState } from "react";
import { cn } from "../lib/utils";
import useAuth from "../hooks/useAuth"; // import your auth hook
import { Home, Users, Tag, Box, ShoppingCart, LogOut } from "lucide-react";

const useAdminSidebar = () => {
  const { handleLogout } = useAuth(); // get the proper logout function
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Wrap handleLogout to close sidebar after logout
  const hanleLogout = async () => {
    await handleLogout(); // calls backend and clears localStorage
    handleClose(); // close sidebar
  };

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/admin-dashboard" },
    { name: "Manage Users", icon: Users, path: "/manage-users" },
    { name: "Manage Categories", icon: Tag, path: "/manage-categories" },
    { name: "Manage Products", icon: Box, path: "/manage-products" },
    { name: "Manage Orders", icon: ShoppingCart, path: "/manage-orders" },
    { name: "Logout", icon: LogOut, action: hanleLogout },
  ];

  const linkStyle = ({ isActive }) =>
    cn(
      "flex items-center gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer",
      isActive && "bg-blue-500 text-white",
    );

  return { isOpen, handleOpen, handleClose, menuItems, linkStyle };
};

export default useAdminSidebar;
