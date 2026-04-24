import { useState, useEffect } from "react";
import api from "../api/api";

const useRecentUser = () => {
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        const response = await api.get("/admin/manage-users"); // fetch all users
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0); // start of the day

        const filteredUsers = response.data
          .filter((user) => user.user_type !== 1)
          .filter((user) => {
            const userDate = new Date(user.created_at);
            userDate.setHours(0, 0, 0, 0);
            return userDate >= sevenDaysAgo;
          })
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRecentUsers(filteredUsers);
      } catch (err) {
        console.error("Failed to fetch recent users:", err);
      }
    };

    fetchRecentUsers();
  }, []);

  return { recentUsers };
};
export default useRecentUser;
