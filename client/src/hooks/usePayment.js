import api from "../api/api";

const usePayment = (user, total, showToast, setSuccess, navigate) => {
  const handlePayment = async () => {
    try {
      const items = JSON.parse(localStorage.getItem("checkout_items"));

      if (!items || items.length === 0) {
        showToast("No items to checkout");
        return;
      }

      const payloadItems = items.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      }));

      // 1. CREATE ORDER (pending)
      const res = await api.post("/users/orders/checkout", {
        user_id: user.id,
        items: payloadItems,
        total,
      });

      const orderId = res.data.orderId;

      // 2. SIMULATE GCASH SUCCESS
      // (or after real payment callback)
      await api.put(`/users/orders/payment-success/${orderId}`);

      // cleanup
      localStorage.removeItem("checkout_items");
      localStorage.removeItem("total");

      showToast("Payment Successful 🎉");
      setSuccess(true);

      setTimeout(() => {
        navigate("/payment-successful");
      }, 2000);
    } catch (err) {
      console.error(err);
      showToast("Payment Failed ❌");
    }
  };

  return { handlePayment };
};

export default usePayment;