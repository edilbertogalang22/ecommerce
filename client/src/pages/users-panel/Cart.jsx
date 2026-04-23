import { useCart } from "../../hooks/useCart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardImage,
  CardFooter,
} from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
const Cart = () => {
  const { cartItems, handleCheckout, handleRemoveItem, handleUpdateQuantity } =
    useCart();

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <title>Shopping Cart</title>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">Your cart is empty 🛒</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 p-4 shadow-md"
            >
              {/* IMAGE */}
              <div className="w-full sm:w-32">
                <CardImage
                  src={item.image_url || "https://via.placeholder.com/150"}
                  alt={item.name}
                  className="rounded-lg object-cover w-full h-32"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1 w-full">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {item.category_name}
                </CardDescription>

                <p className="text-blue-600 font-semibold mt-2">
                  ₱ {item.price}
                </p>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm">Qty: {item.quantity || 1}</span>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                  className="mt-2"
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* TOTAL SECTION */}
      {cartItems.length > 0 && (
        <div className="mt-8 border-t pt-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Total</h2>

          <p className="text-xl font-bold text-blue-600">
            ₱{" "}
            {cartItems.reduce(
              (total, item) => total + item.price * (item.quantity || 1),
              0,
            )}
          </p>
          <Button
            size="sm"
            variant="secondary"
            className="mt-2"
            onClick={handleCheckout}
          >
            Check Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
