import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { QRCode } from "react-qr-code";

import useProfile from "../../hooks/useProfile";
import useCountdownTimer from "../../hooks/useCountdownTimer";
import useToast from "../../hooks/useToast";
import usePayment from "../../hooks/usePayment";

const Payment = () => {
  const navigate = useNavigate();
  const { user } = useProfile();

  const total = Number(localStorage.getItem("total") || 0);

  const [loading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { timeLeft, formatTime } = useCountdownTimer(300);
  const { toast, showToast } = useToast();

  const [txnId] = useState(
    "TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
  );

  const { handlePayment } = usePayment(
    user,
    total,
    showToast,
    setSuccess,
    navigate,
  );

  if (!user) {
    return <div className="text-center mt-10">Loading user details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 relative">
      {/* TOAST (same UI) */}
      {toast && (
        <div className="absolute top-5 bg-black text-white px-4 py-2 rounded-lg text-sm shadow-lg">
          {toast}
        </div>
      )}

      {/* SUCCESS OVERLAY (same UI) */}
      {success && (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-50 animate-pulse">
          <div className="text-green-500 text-6xl">✔</div>
          <h1 className="text-2xl font-bold mt-2">Payment Successful</h1>
          <p className="text-gray-500 text-sm">Redirecting...</p>
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-[#0b63e5] text-white p-5 text-center">
          <h1 className="text-2xl font-bold">GCash Payment</h1>
          <p className="text-xs opacity-80">Secure Checkout Gateway</p>
        </div>

        {/* TIMER + TXN */}
        <div className="p-4 flex justify-between text-xs text-gray-600 border-b">
          <span>⏳ {formatTime(timeLeft)}</span>
          <span>🧾 {txnId}</span>
        </div>

        {/* AMOUNT */}
        <div className="p-6 text-center border-b">
          <p className="text-gray-500 text-sm">Amount to Pay</p>
          <h2 className="text-4xl font-extrabold text-[#0b63e5]">₱{total}</h2>
        </div>

        {/* QR */}
        <div className="p-6 flex flex-col items-center">
          <div className="bg-white p-3 rounded-xl shadow">
            <QRCode
              value={`TXN:${txnId}|AMOUNT:${total}|USER:${user.id}`}
              size={150}
            />
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Scan to simulate payment (demo)
          </p>
        </div>

        {/* USER INFO */}
        <div className="px-5 pb-4 text-sm">
          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="font-semibold text-gray-700 mb-1">Customer Details</p>
            <p>
              {user.firstname} {user.lastname}
            </p>
            <p>📍 {user.address}</p>
            <p>📱 {user.contact}</p>
            <p>📧 {user.email}</p>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="px-5 pb-5">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-2xl">
            <p className="text-xs opacity-80">Payment Method</p>
            <p className="font-bold text-lg">GCash Wallet</p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="p-5 pt-0">
          <button
            onClick={handlePayment}
            disabled={loading || timeLeft <= 0}
            className="w-full bg-[#0b63e5] hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition active:scale-95 disabled:opacity-50"
          >
            {loading
              ? "Processing..."
              : timeLeft <= 0
                ? "Session Expired"
                : "Confirm & Pay"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
