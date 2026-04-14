import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProductsSection = ({ products, loading, error }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-bold text-3xl mb-12">
          Featured Products
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {error && (
          <p className="text-center text-red-500">
            Failed to load featured products
          </p>
        )}

        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500">No featured products yet</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
