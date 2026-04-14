import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import useProductDetails from "../hooks/useProductDetails";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardImage,
} from "../components/ui/Card";

const ProductDetails = () => {
  const { product, loading, error } = useProductDetails();

  const user = JSON.parse(localStorage.getItem("user"));

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading product...</p>
    );
  }

  if (error || !product) {
    return (
      <p className="text-center mt-10 text-red-500">Failed to load product.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10">
      <Card className="overflow-hidden shadow-lg">
        {/* IMAGE */}
        <CardHeader>
          <CardImage
            src={product.image_url || "https://via.placeholder.com/150"}
            alt={product.name}
          />

          <CardTitle className="text-2xl">{product.name}</CardTitle>

          <CardDescription>{product.category_name}</CardDescription>
        </CardHeader>

        {/* CONTENT */}
        <CardContent>
          <p className="text-gray-700">{product.description}</p>

          <p className="text-xl font-bold text-blue-600 mt-4">
            ₱ {product.price}
          </p>

          <p className="mt-2 text-gray-600">
            Stock: <span className="font-medium">{product.stock}</span>
          </p>
        </CardContent>

        {/* ACTION */}
        <CardFooter>
          {!user ? (
            <div className="w-full bg-red-50 border border-red-200 p-4 rounded">
              <p className="text-red-600 mb-3 text-sm">
                Please login to purchase this product
              </p>

              <Link to="/login">
                <Button className="w-full">Login</Button>
              </Link>
            </div>
          ) : (
            <Button className="w-full">Add to Cart</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
