import { useState, useEffect } from "react";
import api from "../api/api";

const useProfile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/users/profile");

        setUser(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/users/orders");
        setOrders(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return { user, orders };
};

export default useProfile;
