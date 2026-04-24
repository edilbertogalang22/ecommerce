import useProducts from "../../hooks/useProducts";
import ProductGrid from "../../components/ui/ProductGrid";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { products, loading } = useProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Hello, {user?.firstname}'s 👋
      </h1>

      <h2 className="text-lg font-semibold mb-4">Recommended Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default UserDashboard;
