import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (register.password !== register.confirmPassword) {
      setMessage("Password do not match...");
      setIsError(true);
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        firstname: register.firstname,
        lastname: register.lastname,
        address: register.address,
        contact: register.contact,
        email: register.email,
        password: register.password,
      });

      // show message success
      setMessage(res.data.message || "Registration successful!");
      setIsError(false);

      // delay handling message
      setTimeout(() => {
        setLoading(false);
        // reset the form
        setRegister({
          firstname: "",
          lastname: "",
          address: "",
          contact: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }, 2000); // 2s delay
    } catch (err) {
      const errMessage = err.response ? err.response.data.message : err.message;
      setMessage(errMessage);
      setIsError(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2s delay even on error
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 2000); // Clear message after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount or when message changes
    }
  }, [message]);
  return {
    message,
    isError,
    loading,
    register,
    setRegister,
    handleChange,
    handleSubmit,
  };
};
export default Register;
