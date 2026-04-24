import { useState } from "react";

const useToast = () => {
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  return { toast, showToast };
};

export default useToast;
