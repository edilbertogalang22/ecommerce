import useNavbarMenu from "../../hooks/useNavbarMenu.js";
import { NavLink, Link } from "react-router-dom";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";
const Navbar = () => {
  const { isOpen, handleOpen, handleClose, menuItems, navStyle } =
    useNavbarMenu();
  return (
    <nav className="bg-white text-black ">
      <div className="w-full px-10">
        <div className="flex justify-between items-center h-16 text-2xl">
          <div className="font-bold">
            <Link to="/">
              <h1>TechShop</h1>
            </Link>
          </div>
          {/* Desktop menu button */}
          <div className="hidden md:flex space-x-8 ml-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(navStyle, "px-6 py-3 rounded text-lg")}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div>
            <Button
              variant="primary"
              size="sm"
              className="md:hidden bg-white "
              onClick={handleOpen}
            >
              {isOpen ? "✖" : "☰"}
            </Button>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div
              onClick={handleClose}
              className={`fixed inset-0 z-50 text-white bg-black/70 flex flex-col items-center justify-center space-y-6 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              {/* Mobile menu items */}
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
