import { useNavigate } from "react-router-dom";

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      {/* ICON */}
      <div className="text-green-500 text-6xl mb-3 animate-bounce">✔</div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-green-600 mb-2 text-center">
        Payment Successful 🎉
      </h1>

      <p className="text-gray-500 text-center mb-6">
        Your order has been placed successfully
      </p>

      {/* CARD */}
      <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-sm text-center border">
        <p className="text-sm text-gray-500 mb-4">
          Thank you for your purchase!
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/user-dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            🛍 Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition"
          >
            📦 View My Orders
          </button>
        </div>
      </div>

      {/* SMALL FOOTNOTE */}
      <p className="text-xs text-gray-400 mt-6">
        This is a demo transaction system
      </p>
    </div>
  );
};

export default PaymentSuccessful;
