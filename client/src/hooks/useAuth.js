import api from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        email: formLogin.email,
        password: formLogin.password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          firstname: user.firstname,
          usertype: Number(user.user_type),
          status: 1,
        }),
      );

      // clear password field
      setFormLogin((prev) => ({
        ...prev,
        password: "",
      }));

      setMessage(`Welcome back, ${user.firstname}!`);

      // Redirect based on user type
      setTimeout(() => {
        if (Number(user.user_type) === 1) navigate("/admin-dashboard");
        else if (Number(user.user_type) === 2) navigate("/user-dashboard");
      }, 2000); // 2s delay
    } catch (err) {
      const msg = err.response ? err.response.data.message : err.message;
      setMessage(msg);
    }
  };
  const handleLogout = async () => {
    try {
      // Send request to backend with token in header only
      await api.post("/auth/logout"); // No body needed

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirect to login page
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return {
    formLogin,
    message,
    handleChange,
    handleSubmit,
    handleLogout,
  };
};

export default useAuth;
