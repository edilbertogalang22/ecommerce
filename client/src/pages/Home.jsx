import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  Headphones,
} from "lucide-react";

import useFeaturedProduct from "../hooks/useFeaturedProduct";

import Feature from "../components/ui/Feature";
import FeaturedProductsSection from "../components/ui/FeaturedProductsSection";

const Home = () => {
  const { products, loading, error } = useFeaturedProduct();

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to TechShop</h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover the latest tech products at amazing prices
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <Feature icon={Truck} title="Free Shipping" desc="On ₱5,000+" />
          <Feature icon={ShieldCheck} title="Secure Payment" desc="Safe checkout" />
          <Feature icon={ShoppingBag} title="Easy Returns" desc="30-day return" />
          <Feature icon={Headphones} title="24/7 Support" desc="Always available" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <FeaturedProductsSection
        products={products}
        loading={loading}
        error={error}
      />

      {/* CTA */}
      <div className="text-center mb-16">
        <Link to="/products">
          <Button variant="primary">View All Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;