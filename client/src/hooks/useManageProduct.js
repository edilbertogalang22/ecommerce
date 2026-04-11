import { useState, useEffect } from "react";
import api from "../api/api";

const useManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrderPrice, setSortOrderPrice] = useState("");

  // FETCH DATA products + categories
  const fetchData = async () => {
    try {
      const [prodRes, catRes] = await Promise.all([
        api.get("/auth/products"),
        api.get("/auth/categories"),
      ]);

      setProducts(prodRes.data);
      setCategories(catRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // INPUT HANDLERS
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortPriceChange = (e) => {
    setSortOrderPrice(e.target.value);
  };

  // MERGE PRODUCTS + CATEGORY NAME
  const mergedProducts = products.map((product) => {
    const category = categories.find((cat) => cat.id === product.category_id);

    return {
      ...product,
      category_name: category ? category.name : "No Category",
    };
  });

  // FILTER (SEARCH + CATEGORY)
  let filteredProducts = mergedProducts.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "" || product.category_name === selectedCategory;

    return matchSearch && matchCategory;
  });

  // SORT (PRICE)
  if (sortOrderPrice === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sortOrderPrice === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Create new product

  return {
    search,
    handleSearchChange,

    categories,
    selectedCategory,
    handleCategoryChange,

    sortOrderPrice,
    handleSortPriceChange,

    filteredProducts,
  };
};

export default useManageProduct;
