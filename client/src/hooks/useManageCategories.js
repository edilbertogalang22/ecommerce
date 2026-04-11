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

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.description.toLowerCase().includes(search.toLowerCase()) ||
      category.created_at.toLowerCase().includes(search.toLowerCase()),
  );
  return { search, handleSearchChange, filteredCategories, fetchCategories };
};
export default useManageCategories;
