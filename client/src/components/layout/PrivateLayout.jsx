import { Outlet } from "react-router-dom";
import AdminSidebar from "../navbar/AdminSidebar";
const PrivateLayout = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default PrivateLayout;
