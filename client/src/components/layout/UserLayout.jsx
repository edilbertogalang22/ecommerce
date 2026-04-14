// import { Outlet } from "react-router-dom";
// import UserNavbar from "../navbar/UserNavbar";

// const UserLayout = () => {
//   return (
//     <div className="min-h-screen">
//       <UserNavbar /> {/* optional */}
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default UserLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
