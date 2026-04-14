import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ui/ProductGrid";

const Products = () => {
  const { products, loading, error } = useProducts();

  const user = JSON.parse(localStorage.getItem("user"));

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading products...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">Failed to load products</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>

      <ProductGrid products={products} />

      {!user && (
        <p className="text-center mt-10 text-red-500 text-sm">
          Note: You can browse products freely. Login is required to purchase.
        </p>
      )}
    </div>
  );
};

export default Products;
