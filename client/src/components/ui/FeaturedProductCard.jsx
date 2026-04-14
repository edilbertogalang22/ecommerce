import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Card, CardContent } from "../ui/Card";

const FeaturedProductCard = ({ product }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* IMAGE */}
      <div className="w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url || "https://via.placeholder.com/300"}
          className="w-full h-full object-cover"
          alt={product.name}
          loading="lazy"
        />
      </div>
      {/* CONTENT */}
      <CardContent className="p-6 flex flex-col flex-1">
        {/* TITLE */}
        <h3 className="font-semibold text-lg">{product.name}</h3>

        {/* DESCRIPTION (fixed height) */}
        <p className="text-gray-600 text-sm line-clamp-3 min-h-[60px]">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="mt-4 text-blue-600 text-2xl font-bold">
          ₱ {product.price} 
        </div>

        {/* BUTTON ALWAYS BOTTOM */}
        <div className="mt-auto flex justify-end pt-4">
          <Link to={`/products/${product.id}`}>
            <Button variant="primary" size="md">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProductCard;
