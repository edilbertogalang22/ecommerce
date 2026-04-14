export const userlogout = (navigate) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  navigate("/home", { replace: true });
};
