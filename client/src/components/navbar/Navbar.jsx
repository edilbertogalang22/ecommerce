import useNavbarMenu from "../../hooks/useNavbarMenu.js";
import { NavLink, Link } from "react-router-dom";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const {
    isOpen,
    handleOpen,
    handleClose,
    menuItems,
    navStyle,
    handleLogout,
    user,
  } = useNavbarMenu();

  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-full px-10">
        <div className="flex justify-between items-center h-16 text-2xl">
          {/* LOGO */}
          <div className="font-bold">
            <Link to="/">
              <h1>TechShop</h1>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(navStyle, "px-4 py-2 rounded text-lg")}
              >
                {item.name}
              </NavLink>
            ))}

            {/* 👉 Logout */}
            {user && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded text-lg"
              >
                Logout
              </button>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <div>
            <Button
              variant="primary"
              size="sm"
              className="md:hidden bg-white"
              onClick={handleOpen}
            >
              {isOpen ? "✖" : "☰"}
            </Button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div
              onClick={handleClose}
              className="fixed inset-0 z-50 text-white bg-black/70 flex flex-col items-center justify-center space-y-6 md:hidden"
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={cn(navStyle, "px-6 py-3 rounded text-lg")}
                  onClick={handleClose}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* 👉 Logout (mobile) */}
              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                    handleClose();
                  }}
                  className="bg-red-500 px-6 py-3 rounded text-lg"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
