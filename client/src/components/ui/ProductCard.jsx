import { Link } from "react-router-dom";
import Button from "../ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardImage,
} from "../ui/Card";

const ProductCard = ({ product }) => {
  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <Card className="hover:shadow-xl p-5 transition h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100">
      {/* IMAGE */}
      <CardHeader className="p-0 relative">
        <CardImage
          src={product.image_url || "https://via.placeholder.com/150"}
          alt={product.name}
          className="h-48 w-full object-cover"
        />

        {/* STOCK BADGE */}
        <div className="absolute top-2 right-2">
          {isOutOfStock ? (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          ) : isLowStock ? (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
              Low Stock
            </span>
          ) : (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              In Stock
            </span>
          )}
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex-1 p-4 ">
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {product.name}
        </CardTitle>

        <CardDescription className="text-sm text-gray-500">
          {product.category_name}
        </CardDescription>

        <p className="text-gray-600 text-sm line-clamp-2 mt-2 min-h-[40px]">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-blue-600 font-bold text-lg">₱ {product.price}</p>

          {/* STOCK TEXT */}
          <p
            className={`text-xs font-medium ${
              isOutOfStock
                ? "text-red-500"
                : isLowStock
                  ? "text-yellow-600"
                  : "text-green-600"
            }`}
          >
            Stock: {product.stock}
          </p>
        </div>
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="p-4  ">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button className="w-full" disabled={isOutOfStock}>
            {isOutOfStock ? "Unavailable" : "View Product"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
