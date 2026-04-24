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
  const {
    product,
    loading,
    error,
    handleAddToCart,
    quantity,
    setQuantity,
    handleBuyNow,
  } = useProductDetails();

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

  const isOutOfStock = product.stock <= 0;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10">
      <Card className="overflow-hidden shadow-xl rounded-2xl border border-gray-100">
        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* IMAGE SIDE */}
          <div className="relative bg-white">
            <CardImage
              src={product.image_url || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* STOCK BADGE */}
            <div className="absolute top-3 left-3">
              <span
                className={`text-xs px-3 py-1 rounded-full text-white ${
                  isOutOfStock ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {isOutOfStock ? "Out of Stock" : "In Stock"}
              </span>
            </div>
          </div>

          {/* DETAILS SIDE */}
          <div className="p-6 flex flex-col">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">
                {product.name}
              </CardTitle>

              <CardDescription className="text-gray-500">
                {product.category_name}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 mt-4 flex-1">
              <p className="text-gray-600">{product.description}</p>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                ₱ {product.price}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Stock:{" "}
                <span className="font-semibold text-gray-700">
                  {product.stock}
                </span>
              </p>

              {/* QUANTITY */}
              <div className="mt-6 flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                <p className="text-sm text-gray-600">Quantity</p>

                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </Button>

                  <span className="w-8 text-center font-semibold">
                    {quantity}
                  </span>

                  <Button
                    variant="primary"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </CardContent>

            {/* ACTIONS */}
            <CardFooter className="p-0 mt-6 flex flex-col gap-2">
              {!user ? (
                <div className="w-full bg-red-50 border border-red-200 p-4 rounded">
                  <p className="text-red-600 mb-2 text-sm">
                    Please login to purchase this product
                  </p>

                  <Link to="/login">
                    <Button className="w-full">Login</Button>
                  </Link>
                </div>
              ) : Number(user.usertype) === 2 ? (
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    className="w-full"
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={handleBuyNow}
                    disabled={isOutOfStock}
                  >
                    Buy Now
                  </Button>
                </div>
              ) : (
                <div className="w-full bg-yellow-50 border border-yellow-200 p-4 rounded">
                  <p className="text-yellow-600 text-sm">
                    Admins cannot purchase products.
                  </p>
                </div>
              )}
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
