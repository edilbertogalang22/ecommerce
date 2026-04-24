import { useEffect, useState } from "react";

const useCountdownTimer = (initial = 300) => {
  const [timeLeft, setTimeLeft] = useState(initial);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return { timeLeft, formatTime };
};

export default useCountdownTimer;
