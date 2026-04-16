import { useState, useEffect } from "react";
import api from "../api/api";

const useProfile = () => {
  const [user, setUser] = useState(null);

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

  return { user };
};

export default useProfile;
