import { useState } from "react";
import { cn } from "../lib/utils";
const useNavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const navStyle = ({ isActive }) =>
    cn(
      "rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white",
      isActive && "bg-blue-600 text-white",
    );

  return { isOpen, handleOpen, handleClose, menuItems, navStyle };
};
export default useNavbarMenu;
