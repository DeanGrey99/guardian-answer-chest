import { Lock } from "lucide-react";

export const FloatingLocks = () => {
  const locks = [
    { delay: "0s", left: "10%", top: "20%" },
    { delay: "0.5s", left: "85%", top: "15%" },
    { delay: "1s", left: "15%", top: "70%" },
    { delay: "1.5s", left: "80%", top: "65%" },
    { delay: "2s", left: "50%", top: "40%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {locks.map((lock, i) => (
        <Lock
          key={i}
          className="absolute text-secure/10 w-12 h-12 animate-float"
          style={{
            left: lock.left,
            top: lock.top,
            animationDelay: lock.delay,
          }}
        />
      ))}
    </div>
  );
};
