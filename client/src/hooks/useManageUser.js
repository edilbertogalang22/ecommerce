import { useState, useEffect } from "react";
import api from "../api/api";
const useManageUser = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await api.get("/admin/manage-users");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstname.toLowerCase().includes(search.toLowerCase()) ||
      user.lastname.toLowerCase().includes(search.toLowerCase()) ||
      user.address.toLowerCase().includes(search.toLowerCase()) ||
      user.contact.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  const handleUpdateUser = async (id, data) => {
    try {
      await api.put(`/admin/manage-users/update-user/${id}`, data);
      await fetchUsers(); // refresh UI
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await api.delete(`/admin/manage-users/delete-user/${id}`);
      await fetchUsers(); // refresh UI
    } catch (err) {
      console.error(err);
    }
  };

  return {
    search,
    handleSearchChange,
    filteredUsers,
    fetchUsers,
    handleUpdateUser,
    handleDeleteUser,
  };
};
export default useManageUser;
