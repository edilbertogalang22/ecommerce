import { useState, useEffect } from "react";
import api from "../api/api";
const useManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const timeAgo = (date) => {
    if (!date) return "";

    const diff = new Date() - new Date(date);
    if (isNaN(diff)) return "";

    const seconds = Math.floor(diff / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (let i of intervals) {
      const count = Math.floor(seconds / i.seconds);
      if (count >= 1) {
        return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter(
    (category) =>
      (category.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (category.description || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (category.created_at || "").toLowerCase().includes(search.toLowerCase()),
  );

  const handleCreateCategory = async (formData) => {
    try {
      await api.post("/categories/create-category", formData);
      await fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateCategory = async (id, data) => {
    try {
      await api.put(`/categories/update-category/${id}`, data);
      await fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await api.delete(`/categories/delete-category/${id}`);
      await fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };
  return {
    search,
    handleSearchChange,
    filteredCategories,
    fetchCategories,
    handleCreateCategory,
    handleUpdateCategory,
    handleDeleteCategory,
    timeAgo,
  };
};
export default useManageCategories;
