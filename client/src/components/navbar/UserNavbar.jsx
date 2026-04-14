import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* LOGO */}
      <Link to="/" className="font-bold text-xl text-blue-600">
        TechShop
      </Link>

      {/* LINKS */}
      <div className="flex items-center gap-4">
        {/* PUBLIC LINKS */}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {/* USER */}
        {user && user.usertype === 2 && (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/user-dashboard">Dashboard</Link>
          </>
        )}

        {/* ADMIN */}
        {user && user.usertype === 1 && (
          <>
            <Link to="/admin-dashboard">Admin</Link>
          </>
        )}

        {/* AUTH */}
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
