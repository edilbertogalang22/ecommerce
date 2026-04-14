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
  return (
    <Card className="hover:shadow-lg transition h-full flex flex-col">
      <CardHeader>
        <CardImage
          src={product.image_url || "https://via.placeholder.com/150"}
          alt={product.name}
        />

        <CardTitle>{product.name}</CardTitle>

        <CardDescription>{product.category_name}</CardDescription>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        <p className="text-blue-600 font-bold mt-3">₱ {product.price}</p>
      </CardContent>

      {/* FOOTER ALWAYS AT BOTTOM */}
      <CardFooter className="mt-auto">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button className="w-full">View Product</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
