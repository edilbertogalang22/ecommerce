// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ requiredRoles }) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (requiredRoles && Number(user.usertype) !== requiredRoles) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };
// export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ requiredRoles }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles && Number(user.usertype) !== Number(requiredRoles)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
