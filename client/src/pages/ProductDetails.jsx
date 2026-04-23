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
  const { product, loading, error, handleAddToCart, quantity, setQuantity } =
    useProductDetails();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("USER:", user);

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
    <div className="max-w-4xl mx-auto p-6 sm:p-6 lg:p-10">
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
        <div className="mt-6 flex items-center justify-between p-3">
          <p className="text-sm text-gray-600">Quantity</p>

          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full">
            <Button
              variant="secondary"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="w-8 h-8 flex items-center justify-center rounded-full"
            >
              -
            </Button>

            <span className="text-base font-semibold w-6 text-center">
              {quantity}
            </span>

            <Button
              variant="primary"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full"
            >
              +
            </Button>
          </div>
        </div>

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
          ) : Number(user.usertype) === 2 ? (
            <Button className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          ) : (
            <div className="w-full bg-yellow-50 border border-yellow-200 p-4 rounded">
              <p className="text-yellow-600 text-sm">
                Admins cannot purchase products.
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
