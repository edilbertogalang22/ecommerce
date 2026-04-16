import { useState } from "react";
import { cn } from "../lib/utils";
import useAuth from "./useAuth";

const useNavbarMenu = () => {
  const { handleLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const user = JSON.parse(localStorage.getItem("user"));

  let menuItems = [];

  // 👉 Guest ONLY
  if (!user) {
    menuItems.push(
      { name: "Products", path: "/products" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Login", path: "/login" },
    );
  }

  // 👉 Normal User
  if (user?.usertype === 2) {
    menuItems.push(
      { name: "Shop Now", path: "/user-dashboard" },
      { name: "Cart", path: "/cart" },
      { name: "Profile", path: "/user-profile" },
    );
  }

  // 👉 Admin
  if (user?.usertype === 1) {
    menuItems.push({ name: "Admin", path: "/admin-dashboard" });
  }

  const navStyle = ({ isActive }) =>
    cn(
      "rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white",
      isActive && "bg-blue-600 text-white",
    );

  return {
    isOpen,
    handleOpen,
    handleClose,
    menuItems,
    navStyle,
    user,
    handleLogout,
  };
};

export default useNavbarMenu;
