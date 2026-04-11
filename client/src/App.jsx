import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import PrivateRoute from "./components/layout/PrivateRoute";
import PrivateLayout from "./components/layout/PrivateLayout";
// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

// prvate routes
import AdminDashboard from "./pages/admin-panel/AdminDashboard";
import ManageUser from "./pages/admin-panel/ManageUser";
import ManageCategories from "./pages/admin-panel/ManageCategories";
import ManageProducts from "./pages/admin-panel/ManageProducts";
import ManageOrders from "./pages/admin-panel/ManageOrders";

// Users Panel
import UserDashboard from "./pages/users-panel/UserDashboard";

// Not Found Page
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute requiredRoles={1} />}>
        <Route element={<PrivateLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUser />} />
          <Route path="/manage-categories" element={<ManageCategories />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/manage-orders" element={<ManageOrders />} />
        </Route>
      </Route>

      {/* Fallback Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
