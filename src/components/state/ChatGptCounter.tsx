import { useState } from "react";

export const ChatGptCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-4 text-2xl">
      <h2>Count : {count}</h2>
      <button
        className="cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="cursor-pointer"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <button className="cursor-pointer" onClick={() => setCount(() => 0)}>
        Reset
      </button>
    </div>
  );
};
