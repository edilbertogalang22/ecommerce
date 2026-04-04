import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Truck, ShieldCheck, ShoppingBag, Headphones } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:p-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4">
                <Truck className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mt-4">Free Shipping</h3>
              <p className="text-gray-600">On orders over ₱5,000</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4">
                <ShieldCheck className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mt-4">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4">
                <ShoppingBag className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mt-4">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4">
                <Headphones className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-bold text-3xl mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="" alt="" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">MacBook Pro 16"</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  Powerful laptop with M3 chip, 16GB RAM, and 512GB SSD. Perfect
                  for professionals and creators.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-2xl font-bold">
                    P 1405134
                  </span>
                </div>
                <div className="flex justify-end mt-4">
                  <Link to={`/products`}>
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
